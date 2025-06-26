interface ISelectSortData {
  label: string;
  value: string;
}

export const selectSortData: ISelectSortData[] = [
  { label: "Best Sellers", value: "best-sellers" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A to Z", value: "name-asc" },
  { label: "Name: Z to A", value: "name-desc" },
];

export type TSortMethods =
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "name-desc"
  | "best-sellers";
