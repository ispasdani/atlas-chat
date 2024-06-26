import { authOptions } from "@/auth";
import AdminControls from "@/components/adminControls/AdminControls";
import ChatInput from "@/components/chatInput/ChatInput";
import ChatMembersBadge from "@/components/chatMembersBadge/ChatMembersBadge";
import ChatMessages from "@/components/chatMessages/ChatMessages";
import { chatMembersRef } from "@/lib/converters/ChatMembers";
import { sortedMessagesRef } from "@/lib/converters/Message";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type ChatPageProps = {
  params: {
    chatId: string;
  };
};

async function ChatPage({ params: { chatId } }: ChatPageProps) {
  const session = await getServerSession(authOptions);

  const initialMessages = (await getDocs(sortedMessagesRef(chatId))).docs.map(
    (doc) => doc.data()
  );

  const hasAccess = (await getDocs(chatMembersRef(chatId))).docs
    .map((doc) => doc.id)
    .includes(session?.user.id!);

  if (!hasAccess) redirect("/chat?error=permission");

  return (
    <>
      {/* Admin controlls */}
      <AdminControls chatId={chatId} />

      {/* Chat Member Badge */}
      <ChatMembersBadge chatId={chatId} />

      {/* Chat Messages */}
      <div className="flex-1">
        <ChatMessages
          chatId={chatId}
          session={session}
          initialMessages={initialMessages}
        />
      </div>
      {/* Chat Input */}
      <ChatInput chatId={chatId} />
    </>
  );
}

export default ChatPage;
