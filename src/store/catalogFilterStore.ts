import { TCategory } from "@/components/pages/catalog/data/ProductsData";
import { TSortMethods } from "@/components/pages/catalog/data/SelectSortData";
import { create } from "zustand";

export interface IPriceRange {
  min: number | null;
  max: number | null;
}

interface CatalogFilterState {
  categoryFilters: TCategory[];
  priceRange: IPriceRange;
  activeFilters: string[];
  sortMetods: TSortMethods;

  setSortMethods: (value: TSortMethods) => void;
  toggleCategory: (category: TCategory) => void;
  setApplyPriceRange: (range: IPriceRange) => void;
  removeFilter: (filter: string) => void;
  clearAllFilters: () => void;
}

export const useCatalogFilterStore = create<CatalogFilterState>((set, get) => ({
  categoryFilters: [],
  priceRange: { min: null, max: null },
  activeFilters: [],
  sortMetods: "best-sellers",

  setSortMethods: (value) => set({ sortMetods: value }),

  toggleCategory: (category) => {
    const { categoryFilters, activeFilters } = get();
    const isSelected = categoryFilters.includes(category);

    const updatedCategories = isSelected
      ? categoryFilters.filter((c) => c !== category)
      : [...categoryFilters, category];

    const updatedActive = isSelected
      ? activeFilters.filter((f) => f !== category)
      : [...activeFilters, category];

    set({
      categoryFilters: updatedCategories,
      activeFilters: updatedActive,
    });
  },

  setApplyPriceRange: ({ min, max }) => {
    const { activeFilters } = get();

    const priceLabel = `Price: ${min ?? 0} - ${max ?? "∞"}`;
    const withoutOldPrice = activeFilters.filter(
      (f) => !f.startsWith("Price:")
    );

    set({
      priceRange: { min, max },
      activeFilters:
        min === null && max === null
          ? withoutOldPrice
          : [...withoutOldPrice, priceLabel],
    });
  },

  removeFilter: (filter) => {
    const { categoryFilters, activeFilters } = get();

    if (filter.startsWith("Price:")) {
      set({
        priceRange: { min: null, max: null },
        activeFilters: activeFilters.filter((f) => f !== filter),
      });
    } else {
      set({
        categoryFilters: categoryFilters.filter((c) => c !== filter),
        activeFilters: activeFilters.filter((f) => f !== filter),
      });
    }
  },

  clearAllFilters: () => {
    set({
      categoryFilters: [],
      priceRange: { min: null, max: null },
      activeFilters: [],
    });
  },
}));
