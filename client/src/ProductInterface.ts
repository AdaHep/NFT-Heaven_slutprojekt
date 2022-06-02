export interface Product {
  id: string;
  categories: Category[];
  name: string;
  description: string;
  price: number;
  stock: number;
  quantity: number;
  imageId: string;
  /** Virtual */ imageURL: string;
}

export interface Category {
  _id: string;
  name: string;
}

// hej
