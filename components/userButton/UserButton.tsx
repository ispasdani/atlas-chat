"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "../userAvatar/UserAvatar";
import { Session } from "next-auth";
import { Button } from "../ui/button";
import { signIn, signOut } from "next-auth/react";
import { useSubscriptionStore } from "@/store/store";
import { SpokeSpinner } from "../loadingSpinner/LoadingSpinner";
import { StarIcon } from "lucide-react";
import ManageAccountButton from "../manageAccountButton/ManageAccountButton";

type UserButtonProps = {
  session: Session | null;
};

const UserButton = ({ session }: UserButtonProps) => {
  //Subscription listener....
  const subscription = useSubscriptionStore((state) => state.subscription);

  if (!session) {
    return (
      <Button variant={"outline"} onClick={() => signIn()}>
        Sign In
      </Button>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar name={session.user?.name} image={session.user?.image} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {subscription === undefined && (
          <DropdownMenuItem>
            <SpokeSpinner />
          </DropdownMenuItem>
        )}

        {subscription?.role === "pro" && subscription.status === "active" && (
          <>
            <DropdownMenuLabel className="text-xs flex items-center justify-center space-x-1 text-[#E935C1] animate-pulse">
              <StarIcon fill="#E935C1" />
              <p>PRO</p>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <ManageAccountButton />
            </DropdownMenuItem>
          </>
        )}
        <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
