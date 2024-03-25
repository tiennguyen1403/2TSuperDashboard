"use client";

import { User } from "@nextui-org/react";

const Header = () => {
  return (
    <div className="h-24 border-b-1 border-b-[#e8edff] flex items-center justify-between px-6">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold">Dashboard - eCommerce</h3>
        <p className="text-[#5d6a83] text-base font-normal">Let's check your store today</p>
      </div>
      <User
        classNames={{ name: "text-base font-medium", description: "text-sm" }}
        name="James Nguyen"
        description="Super Admin"
        avatarProps={{ src: "https://avatars.githubusercontent.com/u/30373425?v=4" }}
      />
    </div>
  );
};

export default Header;
