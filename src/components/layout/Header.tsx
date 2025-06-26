"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Search, ShoppingBag, ShoppingCart, User } from "lucide-react";
import { Input } from "../ui/input";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import SidebarMenu from "./SideBar";
import { useCartStore } from "@/store/cartStore";
import { Badge } from "../ui/badge";

const Header: React.FunctionComponent = () => {
  const isMobile = useMediaQuery(768);

  const { items } = useCartStore();

  const cartItemsCount = items.length;
  console.log(cartItemsCount);

  return (
    <div className="bg-neutral-950 text-white py-5">
      {!isMobile ? (
        <div className="max-w-screen-xl m-auto flex justify-between items-center px-4">
          <div className=" flex items-center gap-10">
            <Link href="/">
              <ShoppingBag className=" w-5 h-5" />
            </Link>
            <Link href="/catalog" className=" font-semibold">
              <Button
                variant="ghost"
                className="cursor-pointer hover:bg-inherit hover:text-white hover:scale-105 hover:tracking-wide transition duration-200"
              >
                Catalog
              </Button>
            </Link>
          </div>
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

            <Link href="/cart" className=" relative">
              <Button variant="ghost" className=" cursor-pointer">
                <ShoppingCart />
              </Button>
              {cartItemsCount > 0 && (
                <Badge
                  variant="destructive"
                  className=" h-4 rounded-full p-1 absolute top-0 right-0 bg-blue-600 text-white font-bold"
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Link>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-xl m-auto flex justify-end gap-4 items-center px-4 pl-[72px]">
          <SidebarMenu />
          <div className=" flex gap-1 items-center relative min-w-[130px]">
            <Search className=" absolute right-2" />
            <Input />
          </div>

          <Link href="/cart" className=" relative">
            <Button variant="ghost" className=" cursor-pointer">
              <ShoppingCart />
            </Button>
            {cartItemsCount > 0 && (
              <Badge
                variant="destructive"
                className=" h-4 rounded-full p-1 absolute top-0 right-0 bg-blue-600 text-white font-bold"
              >
                {cartItemsCount}
              </Badge>
            )}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
