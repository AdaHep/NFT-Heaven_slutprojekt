export interface Product {
  categories: String[];
  name: String;
  description: String;
  price: number;
  stock?: Number;
  quantity: number;
  imageId: String;
  /** Virtual */ imageURL: string;
}
