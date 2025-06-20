"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Search, ShoppingBag, ShoppingCart, User } from "lucide-react";
import { Input } from "../ui/input";

const Header: React.FunctionComponent = () => {
  return (
    <div className="bg-neutral-950 text-white py-5">
      <div className="max-w-screen-xl m-auto flex justify-between items-center">
        <Link href="/">
          <ShoppingBag className=" w-5 h-5" />
        </Link>
        <div className=" flex gap-4 items-center">
          <div className=" flex gap-1 items-center relative">
            <Search className=" absolute right-2" />
            <Input />
          </div>

          <Link href="/profile">
            <Button variant="ghost" className=" cursor-pointer">
              <User />
            </Button>
          </Link>

          <Link href="/cart">
            <Button variant="ghost" className=" cursor-pointer">
              <ShoppingCart />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
