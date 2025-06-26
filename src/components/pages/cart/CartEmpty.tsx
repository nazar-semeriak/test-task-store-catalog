import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartEmpty: React.FunctionComponent = () => {
  return (
    <div className=" flex justify-center items-center pt-20">
      <div className=" flex flex-col gap-4 items-center">
        <ShoppingCart className=" text-neutral-400" />
        <div className=" text-center flex flex-col gap-1">
          <Typography variant="largeBold">Nothing here yet</Typography>
          <Typography variant="small" className=" text-neutral-500">
            Your cart is currently empty. Start exploring our catalog and add
            something you like!
          </Typography>
        </div>
        <Link href="/catalog">
          <Button className=" bg-blue-600 cursor-pointer font-bold">
            Browse Catalog
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
