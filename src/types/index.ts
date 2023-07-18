export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}
export type SettingContext = {
  openSidebar: boolean;
  toogleSidebar: () => void;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type CartType = {
  id: number;
  products: ProductCartType[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export type ProductCartType = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
};

export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
};
