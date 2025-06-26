import { IProduct } from "@/components/pages/catalog/data/ProductsData";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem extends IProduct {
  quantity: number;
}
interface ICartStore {
  items: CartItem[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  isInCart: (productId: string) => boolean;
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
  getItemQuantity: (productId: string) => number;
}

export const useCartStore = create<ICartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product) => {
        const items = get().items;
        const existing = items.find((item) => item.id === product.id);

        if (existing) {
          const updated = items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set({ items: updated });
        } else {
          const newItem: CartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            image: product.image,
            description: product.description,
            ordersCount: product.ordersCount,
            quantity: 1,
          };

          set({ items: [...items, newItem] });
        }
      },

      removeFromCart: (productId) => {
        const updated = get().items.filter((item) => item.id !== productId);
        set({ items: updated });
      },

      clearCart: () => {
        set({ items: [] });
      },

      increaseQuantity: (productId) => {
        const updated = get().items.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        set({ items: updated });
      },

      decreaseQuantity: (productId) => {
        const updated = get()
          .items.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);
        set({ items: updated });
      },

      isInCart: (productId) => {
        return get().items.some((item) => item.id === productId);
      },
      getTotalQuantity: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },
      getItemQuantity: (productId: string) => {
        const item = get().items.find((item) => item.id === productId);
        return item ? item.quantity : 0;
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
