import ChatList from "@/components/chatList/ChatList";
import ChatPermissionError from "@/components/chatPermissionError/ChatPermissionError";
import React from "react";

type ChatsProps = {
  params: {};
  searchParams: {
    error: string;
  };
};

async function ChatsPage({ searchParams: { error } }: ChatsProps) {
  return (
    <div>
      {error && (
        <div className="m-2">
          <ChatPermissionError />
        </div>
      )}
      <ChatList />
    </div>
  );
}

export default ChatsPage;
