import React from "react";
import InviteUser from "@/components/adminControls/modules/InviteUser";
import DeleteChatButton from "@/components/adminControls/modules/DeleteChatButton";

type AdminControlsProps = {
  chatId: string;
};

function AdminControls({ chatId }: AdminControlsProps) {
  return (
    <div className="flex justify-end space-x-2 m-5 mb-0">
      <InviteUser chatId={chatId} />
      <DeleteChatButton chatId={chatId} />
    </div>
  );
}

export default AdminControls;
