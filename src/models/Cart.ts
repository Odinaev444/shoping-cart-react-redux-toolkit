import { Product } from "./Product";

export interface Cart {
  items: {
    product: Product;
    quantity: number;
  }[];
  totalQuantity: number;
}
