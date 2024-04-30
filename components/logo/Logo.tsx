import Link from "next/link";
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import LogoSvg from "@/svgs/LogoSvg";

const Logo = () => {
  return (
    <Link href={"/"} prefetch={false} className="overflow-hidden">
      <div className="flex items-center justify-start">
        <LogoSvg />
      </div>
    </Link>
  );
};

export default Logo;
