"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import useAdminId from "@/hooks/useAdminId";

type DeleteChatButtonProps = {
  chatId: string;
};

function DeleteChatButton({ chatId }: DeleteChatButtonProps) {
  const { data: session } = useSession();
  const { toast } = useToast();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const adminId = useAdminId({ chatId });

  const handleDelete = async () => {
    toast({
      title: "Deleting chat",
      description: "Please wait while we delete the chat...",
    });

    console.log("Deleting:: ", chatId);

    await fetch("/api/chat/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chatId: chatId }),
    })
      .then((res) => {
        toast({
          title: "Success",
          description: "Your chat has been deleted!",
          className: "bg-green-600 text-white",
          duration: 3000,
        });
        router.replace("/chats");
      })
      .catch((error) => {
        console.error(error.message);
        toast({
          title: "Error",
          description: "There was an error deleting your chat!",
          variant: "destructive",
        });
      })
      .finally(() => setOpen(false));
  };

  return (
    session?.user.id === adminId && (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete Chat</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This will delete the chat for all users.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 space-x-2">
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>

            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  );
}

export default DeleteChatButton;
