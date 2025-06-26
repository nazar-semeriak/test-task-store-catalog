export type TCategory = "Electronics" | "Books" | "Clothing" | "Home";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  category: TCategory;
  image: string;
  description: string;
  ordersCount: number;
}

export const mockedProducts: IProduct[] = [
  {
    id: "1",
    name: "SoundPro X2 Wireless Headphones",
    price: 2499,
    category: "Electronics",
    image: "/assets/img/headphones.jpg",
    description:
      "Comfortable Bluetooth headphones with noise cancellation and up to 30 hours of battery life.",
    ordersCount: 124,
  },
  {
    id: "2",
    name: "Book: The Art of War",
    price: 65,
    category: "Books",
    image: "/assets/img/book-art-of-war.jpg",
    description: "The classic treatise on military strategy and philosophy.",
    ordersCount: 78,
  },
  {
    id: "3",
    name: "Oversize Basic T-Shirt",
    price: 599,
    category: "Clothing",
    image: "/assets/img/over-t-shirt.webp",
    description: "Soft and stylish cotton t-shirt with a relaxed fit.",
    ordersCount: 203,
  },
  {
    id: "4",
    name: "HomeMix 500W Smoothie Blender",
    price: 1399,
    category: "Home",
    image: "/assets/img/MOOTHIE-BLENDER-500W.jpg",
    description: "Powerful and compact blender for making drinks and purees.",
    ordersCount: 95,
  },
  {
    id: "5",
    name: "Smartphone Galaxy X20",
    price: 799,
    category: "Electronics",
    image: "/assets/img/smartphone-galaxy-x20.jpg",
    description:
      "Powerful smartphone with high-resolution display and long battery life.",
    ordersCount: 250,
  },
  {
    id: "6",
    name: "Wireless Earbuds Pro",
    price: 129,
    category: "Electronics",
    image: "/assets/img/wireless-earbuds-pro.jpg",
    description: "Noise-cancelling earbuds with crystal-clear sound.",
    ordersCount: 430,
  },
  {
    id: "7",
    name: "Gaming Laptop ZX15",
    price: 1399,
    category: "Electronics",
    image: "/assets/img/gaming-laptop-zx15.avif",
    description: "High-performance laptop for gaming and productivity.",
    ordersCount: 90,
  },
  {
    id: "8",
    name: "E-Reader Kindle Max",
    price: 119,
    category: "Electronics",
    image: "/assets/img/e-reader-kindle-max.jpeg",
    description:
      "Lightweight e-reader with high-contrast display for easy reading.",
    ordersCount: 310,
  },
  {
    id: "9",
    name: "The Art of Thinking Clearly",
    price: 15,
    category: "Books",
    image: "/assets/img/the-art-of-thinking-clearly.webp",
    description: "Best-selling book on cognitive biases and logical thinking.",
    ordersCount: 710,
  },
  {
    id: "10",
    name: "Atomic Habits",
    price: 20,
    category: "Books",
    image: "/assets/img/atomic-habits.webp",
    description:
      "Build better habits and break bad ones with proven strategies.",
    ordersCount: 850,
  },
  {
    id: "11",
    name: "Clean Code",
    price: 45,
    category: "Books",
    image: "/assets/img/clean-code.webp",
    description: "A handbook of agile software craftsmanship.",
    ordersCount: 480,
  },
  {
    id: "12",
    name: "The Pragmatic Programmer",
    price: 40,
    category: "Books",
    image: "/assets/img/the-pragmatic-programmer.jpeg",
    description: "Essential techniques for effective programming.",
    ordersCount: 390,
  },
  {
    id: "13",
    name: "Men's Casual T-Shirt",
    price: 25,
    category: "Clothing",
    image: "/assets/img/men's-casual-t-Shirt.jpg",
    description: "Comfortable cotton t-shirt perfect for everyday wear.",
    ordersCount: 330,
  },
  {
    id: "14",
    name: "Women's Denim Jacket",
    price: 65,
    category: "Clothing",
    image: "/assets/img/women's-denim-jacket.webp",
    description: "Stylish jacket made of premium quality denim.",
    ordersCount: 220,
  },
  {
    id: "15",
    name: "Running Shoes",
    price: 89,
    category: "Clothing",
    image: "/assets/img/running-shoes.webp",
    description: "Lightweight and breathable running shoes for daily training.",
    ordersCount: 580,
  },
  {
    id: "16",
    name: "Unisex Hoodie",
    price: 55,
    category: "Clothing",
    image: "/assets/img/unisex-hoodie.jpg",
    description: "Cozy and warm hoodie with a modern fit.",
    ordersCount: 440,
  },
  {
    id: "17",
    name: "Modern Table Lamp",
    price: 35,
    category: "Home",
    image: "/assets/img/modern-table-lamp.jpeg",
    description: "Minimalist lamp suitable for workspaces or bedrooms.",
    ordersCount: 170,
  },
  {
    id: "18",
    name: "Ceramic Dinner Set",
    price: 99,
    category: "Home",
    image: "/assets/img/ceramic-dinner-set.webp",
    description:
      "Elegant 16-piece ceramic set for daily meals or special occasions.",
    ordersCount: 280,
  },
  {
    id: "19",
    name: "Vacuum Cleaner TurboX",
    price: 159,
    category: "Home",
    image: "/assets/img/vacuum-cleaner-turboX.avif",
    description: "High-suction vacuum cleaner ideal for pet owners.",
    ordersCount: 200,
  },
  {
    id: "20",
    name: "Memory Foam Pillow",
    price: 30,
    category: "Home",
    image: "/assets/img/memory-foam-pillow.webp",
    description: "Ergonomic pillow designed for superior neck support.",
    ordersCount: 300,
  },
];
