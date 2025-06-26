import {
  IProduct,
  mockedProducts,
  TCategory,
} from "@/components/pages/catalog/data/ProductsData";
import { TSortMethods } from "@/components/pages/catalog/data/SelectSortData";
import { IPriceRange } from "@/store/catalogFilterStore";
import { useQuery } from "@tanstack/react-query";

type GetProductsResponse = {
  products: IProduct[];
  totalPages: number;
};

const getProducts = (
  category: TCategory[],
  priceRange: IPriceRange,
  sortMethod: TSortMethods,
  itemsPerPage: number,
  currentPage: number
): Promise<GetProductsResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result: IProduct[];

      if (category?.length > 0) {
        result = mockedProducts.filter((product) =>
          category.includes(product.category)
        );
      } else {
        result = mockedProducts;
      }

      if (priceRange?.min != null && priceRange?.max != null) {
        result = result.filter(
          (product) =>
            product.price >= priceRange.min! && product.price <= priceRange.max!
        );
      }

      if (sortMethod) {
        switch (sortMethod) {
          case "price-asc":
            result = [...result].sort((a, b) => a.price - b.price);
            break;

          case "price-desc":
            result = [...result].sort((a, b) => b.price - a.price);
            break;

          case "name-asc":
            result = [...result].sort((a, b) => a.name.localeCompare(b.name));
            break;

          case "name-desc":
            result = [...result].sort((a, b) => b.name.localeCompare(a.name));
            break;

          case "best-sellers":
            result = [...result].sort((a, b) => b.ordersCount - a.ordersCount);
            break;

          default:
            break;
        }
      }

      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const paginated = result.slice(start, end);

      const totalPages = Math.ceil(result.length / itemsPerPage);

      resolve({ products: paginated, totalPages });
    }, 1000);
  });
};

export const useGetProducts = (
  category: TCategory[],
  priceRange: IPriceRange,
  sortMethod: TSortMethods,
  itemsPerPage: number,
  currentPage: number
) => {
  return useQuery({
    queryKey: [
      "getProducts",
      category,
      priceRange,
      sortMethod,
      itemsPerPage,
      currentPage,
    ],
    queryFn: () =>
      getProducts(category, priceRange, sortMethod, itemsPerPage, currentPage),
  });
};
