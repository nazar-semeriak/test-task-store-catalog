import {
  IProduct,
  mockedProducts,
} from "@/components/pages/catalog/data/ProductsData";
import { useQuery } from "@tanstack/react-query";

const getProduct = (id: string): Promise<IProduct> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mockedProducts.find((product) => product.id === id);
      if (!product) {
        return reject(new Error("Product not found"));
      }
      resolve(product);
    }, 1000);
  });
};

export const useGetProduct = (id: string) => {
  return useQuery({
    queryKey: ["getProduct", id],
    queryFn: () => getProduct(id),
  });
};
