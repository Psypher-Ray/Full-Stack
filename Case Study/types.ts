
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  featured?: boolean;
  specs: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UIState {
  isCartOpen: boolean;
  activeCategory: string;
}
