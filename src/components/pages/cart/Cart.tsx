"use client";

import PageLayout from "@/components/layout/PageLayuot";
import PageBreadcrumb from "@/components/ui/PageBreadcrumb";
import React from "react";
import CartEmpty from "./CartEmpty";

import ProductCartCard from "./ProductCartCard";
import { useCartStore } from "@/store/cartStore";

import OrderSummaryBlock from "./OrderSummaryBlock";
import { MoveLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Cart: React.FunctionComponent = () => {
  const cartBreadcrumb = [
    { label: "Home", href: "/" },
    { label: "Cart", href: "/cart" },
  ];

  const { items, clearCart } = useCartStore();

  return (
    <PageLayout
      title="Cart"
      breadcrumb={<PageBreadcrumb data={cartBreadcrumb} />}
    >
      {items.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className=" max-w-[1200px] m-auto grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,_800px)_minmax(0,_400px)] sm:gap-x-4">
          <div className=" flex flex-col gap-4">
            {items.map((product) => (
              <ProductCartCard key={product.id} product={product} />
            ))}
            <div className=" flex justify-between items-center">
              <Link href="/catalog">
                <Button className=" cursor-pointer text-white bg-blue-600 font-bold">
                  <MoveLeft />
                  Back to catalog
                </Button>
              </Link>
              <Button
                variant="ghost"
                className=" cursor-pointer text-neutral-500 "
                onClick={clearCart}
              >
                <Trash2 />
                Delete all
              </Button>
            </div>
          </div>
          <OrderSummaryBlock />
        </div>
      )}
    </PageLayout>
  );
};

export default Cart;
