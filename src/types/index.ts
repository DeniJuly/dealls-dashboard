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
