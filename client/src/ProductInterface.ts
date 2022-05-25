export interface Product {
  categories: String[];
  name: String;
  description: String;
  price: Number;
  stock?: Number;
  quantity?: Number;
  imageId: String;
  /** Virtual */ imageURL: string;
}
