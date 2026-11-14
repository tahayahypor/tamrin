
export interface Product {
  id: string;
  title: string;
  description?: string;
  quantity: number;
  price: number;
}

export interface CartItem extends Product {
  cartQuantity: number;
}
