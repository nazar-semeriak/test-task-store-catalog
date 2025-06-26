import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useCartStore } from "@/store/cartStore";
import { getItemTotalPrice } from "@/utils/getItemTotalPrice";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

const OrderSummaryBlock: React.FunctionComponent = () => {
  const { items, getTotalPrice } = useCartStore();
  const totalPrice = getTotalPrice();
  return (
    <div className=" flex flex-col max-h-fit gap-4 border border-solid rounded-2xl overflow-hidden shadow-lg p-4">
      <Typography variant="largeSemiBold">Order Summary</Typography>
      <div className=" flex flex-col gap-2">
        {items.map(({ id, name, quantity, price }) => (
          <div
            key={id}
            className=" grid grid-cols-[minmax(0,_1fr)_minmax(70px,_70px)_minmax(70px,_70px)] gap-x-2 items-center"
          >
            <Typography
              variant="small"
              className=" whitespace-nowrap text-ellipsis overflow-hidden"
            >
              {name}
            </Typography>
            <Typography
              variant="small"
              className=" flex gap-2 text-neutral-500"
            >
              <div>{price}</div>
              <div>x</div>
              <div>{quantity}</div>
            </Typography>
            <Typography variant="small" className=" ml-auto">
              {getItemTotalPrice(price, quantity)}$
            </Typography>
          </div>
        ))}
      </div>
      <Separator />
      <div className=" flex flex-col gap-4">
        <div className=" flex justify-between items-center">
          <Typography variant="mediumBold">Total amount:</Typography>
          <Typography variant="mediumBold">{totalPrice}$</Typography>
        </div>
        <Button className=" bg-blue-600 cursor-pointer">
          <Typography variant="mediumSemiBold">Checkout</Typography>
        </Button>
      </div>
    </div>
  );
};

export default OrderSummaryBlock;
