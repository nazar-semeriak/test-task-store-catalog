"use client";

import PageLayout from "@/components/layout/PageLayuot";
import PageBreadcrumb from "@/components/ui/PageBreadcrumb";

import React, { useEffect, useState } from "react";

import CatalogFilterBlock from "./CatalogFilterBlock";

import ProductCard from "./ProductCard";
import { useGetProducts } from "@/api/catalog/getProducts";
import { Skeleton } from "@/components/ui/skeleton";
import { useCatalogFilterStore } from "@/store/catalogFilterStore";

import CatalogPagination from "./CatalogPagination";

const Catalog: React.FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { categoryFilters, priceRange, sortMetods, activeFilters } =
    useCatalogFilterStore();
  const { data, isLoading } = useGetProducts(
    categoryFilters,
    priceRange,
    sortMetods,
    8,
    currentPage
  );
  const products = data?.products ?? [];
  const totalPages = data?.totalPages ?? 0;

  const catalogBreadcrumb = [
    { label: "Home", href: "/" },
    { label: "Catalog", href: "/catalog" },
  ];

  const skeletons = new Array(8)
    .fill(null)
    .map((_, i) => (
      <Skeleton
        key={i}
        className=" w-full aspect-[3/4] sm:aspect-[2/4] rounded-xl"
      />
    ));

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilters]);

  return (
    <PageLayout
      title="Catalog"
      breadcrumb={<PageBreadcrumb data={catalogBreadcrumb} />}
    >
      <div className=" min-w-0 flex flex-col gap-12">
        <CatalogFilterBlock />
        <div className=" grid grid-cols-4 gap-4 grid-cols-3-productWrapper grid-cols-3-productWrapper-xl grid-cols-2-productWrapper-sm grid-cols-1-productWrapper-xs">
          {isLoading
            ? skeletons
            : products?.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
        </div>

        <CatalogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </PageLayout>
  );
};

export default Catalog;
