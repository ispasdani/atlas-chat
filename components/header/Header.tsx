import React from "react";
import Logo from "../logo/Logo";
import DarkModeToggle from "@/components/darkModeToggle/DarkModeToggle";
import UserButton from "@/components/userButton/UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import Link from "next/link";
import { MessagesSquareIcon } from "lucide-react";
import CreateChatButton from "../createChatButton/CreateChatButton";
import UpgradeBanner from "../upgradeBanner/UpgradeBanner";
import LanguageSelect from "../languageSelect/LanguageSelect";

async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />

        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* {LanguageSelect} */}
          <LanguageSelect />

          {/* {Session &&} */}
          {session ? (
            <>
              <Link href={"/chats"} prefetch={false}>
                <MessagesSquareIcon className="text-black dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link href={"/pricing"} prefetch={false}>
              Pricing
            </Link>
          )}

          {/* {DarkMode Toggle} */}
          <DarkModeToggle />

          {/* {UserButton} */}
          <UserButton session={session} />
        </div>
      </nav>

      {/* {Upgrade Banner} */}
      <UpgradeBanner />
    </header>
  );
}

export default Header;
