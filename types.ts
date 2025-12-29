
export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  discount?: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface CustomerInfo {
  fullName: string;
  phone: string;
  city: string;
  address: string;
}
