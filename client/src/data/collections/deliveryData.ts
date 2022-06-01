export interface DeliveryDataInfo {
  firstName: string;
  lastName: string;
  email: string;
  deliveryMethod: {
    title: string;
    price: string | number;
    description: string;
    expectedDeliveryTime: string;
    imageId: string;
  };
  number: number;
  address: string;
  zipCode: number;
  city: string;
  paymentMethod: string;
}

export const DeliveryDataInfoObject: DeliveryDataInfo = {
  firstName: "",
  lastName: "",
  email: "",
  deliveryMethod: {
    title: "",
    price: "",
    description: "",
    expectedDeliveryTime: "",
    imageId: "",
  },
  number: 1,
  address: "",
  zipCode: 1,
  city: "",
  paymentMethod: "",
};
