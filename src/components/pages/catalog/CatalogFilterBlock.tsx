import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useCatalogFilterStore } from "@/store/catalogFilterStore";
import { X } from "lucide-react";
import React from "react";
import { selectSortData, TSortMethods } from "./data/SelectSortData";
import MobileSidebarFilters from "./MobileSidebarFilters";

const CatalogFilterBlock: React.FunctionComponent = () => {
  const {
    activeFilters,
    removeFilter,
    clearAllFilters,
    sortMetods,
    setSortMethods,
  } = useCatalogFilterStore();
  const isMobile = useMediaQuery(1000);

  return (
    <div className="flex justify-between items-center gap-4 sm:gap-8 lg:gap-12 min-w-0">
      {isMobile ? (
        <MobileSidebarFilters />
      ) : (
        <div className=" flex justify-start items-center gap-4 min-w-0">
          <div className=" max-w-full w-full overflow-x-auto scrollbar-hide ">
            <div className="flex gap-1">
              {activeFilters.map((filter, index) => (
                <div
                  key={index}
                  className=" flex items-center gap-1 border border-solid bg-neutral-200 border-neutral-400 px-3 py-0.5 rounded-2xl"
                >
                  <div className=" whitespace-nowrap">{filter}</div>
                  <X
                    size={20}
                    className=" cursor-pointer"
                    onClick={() => removeFilter(filter)}
                  />
                </div>
              ))}
            </div>
          </div>
          {activeFilters.length > 0 && (
            <Button
              variant="ghost"
              className=" cursor-pointer text-neutral-500 hover:text-red-600 hover:bg-inherit"
              onClick={clearAllFilters}
            >
              Clear All
            </Button>
          )}
        </div>
      )}

      <Select
        value={sortMetods}
        onValueChange={(value) => setSortMethods(value as TSortMethods)}
      >
        <SelectTrigger className="w-[155px] sm:w-[170px] lg:w-[180px] text-xs sm:text-sm ">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sort by</SelectLabel>
            {selectSortData.map(({ label, value }) => (
              <SelectItem
                key={value}
                value={value}
                className=" text-xs sm:text-sm"
              >
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CatalogFilterBlock;
