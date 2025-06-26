import { useState } from "react";
import { ListFilter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CatalogSidebar from "./CatalogSidebar";
import { useCatalogFilterStore } from "@/store/catalogFilterStore";
import { Separator } from "@radix-ui/react-separator";

export default function MobileSidebarFilters() {
  const [isOpen, setIsOpen] = useState(false);

  const { activeFilters, removeFilter, clearAllFilters } =
    useCatalogFilterStore();

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <ListFilter />
        Filters
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-[320px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className=" absolute right-4 top-4"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </button>
        <div className=" p-4">
          <h2 className="text-xl font-bold">Filters</h2>
          <Separator
            className=" mb-4 mt-[32px] bg-neutral-300"
            style={{ height: "2px" }}
          />
          <div className=" flex gap-2 flex-wrap max-w-[288px]">
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
          <div className=" flex justify-end">
            {activeFilters.length > 0 && (
              <Button
                variant="ghost"
                className=" cursor-pointer text-red-600 mt-6"
                onClick={clearAllFilters}
              >
                Clear All
              </Button>
            )}
          </div>
          {activeFilters.length > 0 && (
            <Separator
              className=" my-4 bg-neutral-300"
              style={{ height: "2px" }}
            />
          )}
          <CatalogSidebar withoutTitle />
        </div>
      </aside>
    </>
  );
}
