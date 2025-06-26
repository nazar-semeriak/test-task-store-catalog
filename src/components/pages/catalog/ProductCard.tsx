import { Typography } from "@/components/ui/typography";
import { Check, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import { IProduct } from "./data/ProductsData";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

interface IProductCard {
  product: IProduct;
}

const ProductCard: React.FunctionComponent<IProductCard> = ({ product }) => {
  const { name, description, price, image, id } = product;

  const { addToCart, removeFromCart, isInCart } = useCartStore();

  const inCart = isInCart(id);

  return (
    <div className=" flex flex-col border border-solid rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1]">
      <Link href={`/catalog/${id}`} className=" p-1">
        <div className=" imgContainer">
          <Image
            src={image}
            alt={name}
            className=" overflow-hidden  rounded-t-2xl duration-300 ease-in-out hover:scale-105 cursor-pointer"
            fill
          />
        </div>
      </Link>
      <div className=" flex flex-col gap-6 p-4 h-full justify-between">
        <div>
          <Link href={`/catalog/${id}`}>
            <Typography
              variant="mediumSemiBold"
              className="hover:text-blue-600 cursor-pointer transition-all duration-300 hover:underline mb-2"
            >
              {name}
            </Typography>
          </Link>
          <Typography
            variant="small"
            className="max-h-[80px] overflow-hidden text-ellipsis line-clamp-3"
          >
            {description}
          </Typography>
        </div>
        <div className=" flex justify-between items-center">
          <Typography variant="mediumSemiBold">{price}$</Typography>
          <div className=" p-2 rounded-lg hover:bg-neutral-100">
            {inCart ? (
              <Check
                size={25}
                className=" text-green-600 cursor-pointer"
                onClick={() => removeFromCart(id)}
              />
            ) : (
              <ShoppingCart
                size={25}
                className=" text-blue-600 cursor-pointer"
                onClick={() => addToCart(product)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
