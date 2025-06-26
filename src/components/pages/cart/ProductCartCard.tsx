"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IProduct } from "../catalog/data/ProductsData";
import { useCartStore } from "@/store/cartStore";
import { getItemTotalPrice } from "@/utils/getItemTotalPrice";

interface IProductCartCardProps {
  product: IProduct;
}

const ProductCartCard: React.FunctionComponent<IProductCartCardProps> = ({
  product,
}) => {
  const {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getItemQuantity,
  } = useCartStore();

  const currentProductCount = getItemQuantity(product.id);
  const itemTotalPrice = getItemTotalPrice(currentProductCount, product.price);
  return (
    <div className="grid grid-cols-[minmax(1fr,_1fr)] gap-y-4 sm:grid-cols-[minmax(270px,_1fr)_minmax(120px,_300px)] gap-x-8 items-center border border-solid rounded-2xl overflow-hidden shadow-lg p-4">
      <div className=" grid grid-cols-[minmax(80px,_80px)_minmax(120px,_1fr)] gap-x-4 items-center">
        <Link href={`/catalog/${product.id}`}>
          <div className=" imgContainer">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className=" cardHoverZoom"
            />
          </div>
        </Link>

        <Link href={`/catalog/${product.id}`}>
          <Typography variant="mediumSemiBold" className=" productNameHover">
            {product.name}
          </Typography>
        </Link>
      </div>
      <div className=" grid grid-cols-2 items-center gap-x-8">
        <div className=" flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className=" cursor-pointer"
            onClick={() => decreaseQuantity(product.id)}
            disabled={currentProductCount === 1}
          >
            <Minus size={20} />
          </Button>

          <div className=" flex justify-center items-center px-3.5 py-1 border border-solid rounded-lg border-neutral-300">
            <Typography>{currentProductCount}</Typography>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className=" cursor-pointer"
            onClick={() => increaseQuantity(product.id)}
          >
            <Plus size={20} />
          </Button>
        </div>
        <div className=" flex gap-4 justify-between items-center">
          <Typography variant="mediumSemiBold">{itemTotalPrice}$</Typography>
          <Button
            variant="ghost"
            className="cursor-pointer"
            onClick={() => removeFromCart(product.id)}
          >
            <Trash2 className=" text-red-600 " size={22} />
          </Button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ProductCartCard;
