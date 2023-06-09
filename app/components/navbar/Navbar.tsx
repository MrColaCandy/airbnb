"use client";
import React from "react";
import Container from "../container/Container";
import Logo from "./logo/Logo";
import Search from "./search/Search";
import UserMenu from "./userMenu/UserMenu";

const Navbar = () => {
  return (
    <div className="fixed bg-white z-10 shadow-sm w-full">
      <div className=" py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
