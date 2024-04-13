import Link from "next/link";
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"} prefetch={false} className="overflow-hidden">
      <div className="flex items-center justify-start w-72 h-14">
        <Image
          priority
          src={"/icons/atlasLogo.svg"}
          alt="Atlas Logo"
          width={90}
          height={50}
        />
      </div>
    </Link>
  );
};

export default Logo;
