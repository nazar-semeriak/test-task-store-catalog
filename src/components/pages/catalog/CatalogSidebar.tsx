"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Typography } from "@/components/ui/typography";
import { useCatalogFilterStore } from "@/store/catalogFilterStore";
import React, { useState } from "react";
import { TCategory } from "./data/ProductsData";

interface ICatalogSidebar {
  withoutTitle?: boolean;
}

const CatalogSidebar: React.FunctionComponent<ICatalogSidebar> = ({
  withoutTitle,
}) => {
  const { toggleCategory, activeFilters, setApplyPriceRange } =
    useCatalogFilterStore();

  const categoryFilters: { category: TCategory }[] = [
    { category: "Electronics" },
    { category: "Books" },
    { category: "Clothing" },
    { category: "Home" },
  ];

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value);
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Number(e.target.value.replace(/\D/g, ""));
    setPriceRange(([, max]) => [newMin, max]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Number(e.target.value.replace(/\D/g, ""));
    setPriceRange(([min]) => [min, newMax]);
  };

  const handleApply = () => {
    const [min, max] = priceRange;

    setApplyPriceRange({ min, max });
  };

  return (
    <>
      {!withoutTitle && (
        <>
          <Typography variant="largeSemiBold">Filters</Typography>
          <Separator className=" my-4" style={{ height: "2px" }} />
        </>
      )}

      <Accordion type="single" collapsible defaultValue="category">
        <AccordionItem value="category">
          <AccordionTrigger className=" cursor-pointer">
            Catagery
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3">
              {categoryFilters.map(({ category }) => (
                <div key={category} className="flex items-center gap-3">
                  <Checkbox
                    id={category}
                    value={category}
                    checked={activeFilters.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                    className="cursor-pointer"
                  />
                  <Label
                    htmlFor={category}
                    className="cursor-pointer hover:text-blue-600 transition-all duration-200"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Separator />
      <Accordion type="single" collapsible defaultValue="price">
        <AccordionItem value="price">
          <AccordionTrigger className=" cursor-pointer">Price</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-1 px-2">
              <div className="flex items-center gap-2 p-2">
                <Input
                  type="text"
                  inputMode="numeric"
                  value={priceRange[0]}
                  onChange={handleMinChange}
                  className="w-20"
                  placeholder="Min"
                />
                <span className="text-gray-500">-</span>
                <Input
                  type="text"
                  inputMode="numeric"
                  value={priceRange[1]}
                  onChange={handleMaxChange}
                  className="w-20"
                  placeholder="Max"
                />
              </div>
              <Slider
                className=" p-2 cursor-pointer"
                min={0}
                max={10000}
                step={10}
                value={priceRange}
                onValueChange={handlePriceChange}
              />
              <Button
                variant="outline"
                onClick={handleApply}
                className=" cursor-pointer"
              >
                OK
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Separator />
    </>
  );
};

export default CatalogSidebar;
