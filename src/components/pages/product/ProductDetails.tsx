"use client";

import { useGetProduct } from "@/api/productDetails/getProduct";
import PageLayout from "@/components/layout/PageLayuot";
import { Button } from "@/components/ui/button";
import PageBreadcrumb from "@/components/ui/PageBreadcrumb";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

import ProductDetailsLoading from "@/app/catalog/[productId]/loading";

const ProductDetails: React.FunctionComponent = () => {
  const params = useParams();
  const productId = params.productId as string;

  const { data: product, isLoading, error } = useGetProduct(productId);

  if (isLoading) {
    return <ProductDetailsLoading />;
  }

  if (!product) {
    return <ProductDetailsLoading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const productDeetailsBreadcrumb = [
    { label: "Home", href: "/" },
    { label: "Catalog", href: "/catalog" },
    {
      label: isLoading ? "loading" : product.name,
      href: isLoading ? "loading" : product.name,
    },
  ];

  return (
    <PageLayout
      breadcrumb={<PageBreadcrumb data={productDeetailsBreadcrumb} />}
    >
      <div className=" max-w-[800px] m-auto grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,_350px)_minmax(0,_450px)]">
        <div className=" imgContainer">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className=" rounded-lg"
          />
        </div>
        <div className=" flex flex-col gap-2 justify-between">
          <div className=" flex flex-col gap-4">
            <Typography variant="largeBold" className="pr-12">
              {product.name}
            </Typography>
            <Typography variant="medium">{product.description}</Typography>
            <div className=" flex items-center gap-2">
              <Typography variant="mediumSemiBold">Category:</Typography>
              <Typography variant="p" className=" text-neutral-500">
                {product.category}
              </Typography>
            </div>
          </div>
          <div className=" flex flex-col gap-8">
            <Typography variant="mediumSemiBold">{product.price}$</Typography>
            <Button className=" bg-blue-600 cursor-pointer">
              <Typography variant="mediumSemiBold">Add to cart</Typography>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductDetails;
