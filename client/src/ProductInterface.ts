export interface Product {
  categories: string[];
  name: string;
  description: string;
  price: number;
  stock: number;
  quantity: number;
  imageId: string;
  /** Virtual */ imageURL: string;
}

export interface Category {
  name: string;
}
