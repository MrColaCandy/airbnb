"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  return (
    <Image
      src={"/images/logo.png"}
      alt={"Logo"}
      className=" hidden md:block cursor-pointer"
      height={100}
      width={100}
    ></Image>
  );
};

export default Logo;
