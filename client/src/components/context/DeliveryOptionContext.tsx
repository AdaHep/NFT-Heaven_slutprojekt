import { createContext, FC, useContext, useState } from "react";

export interface DeliveryOption {
  title: string;
  price: number;
  description: string;
  expectedDeliveryTime: number;
  imageId: string;
  /** Virtual */ imageURL: string;
}

interface DeliveryOptionsContext {
  getDeliveryOptions: () => void;
  deliveryOptions: DeliveryOption[];

  setSelectedDeliveryOption: Function;
  selectedDeliveryOption?: DeliveryOption;
}

export const DeliveryOptionContext = createContext<DeliveryOptionsContext>({
  getDeliveryOptions: () => {},
  deliveryOptions: [],

  setSelectedDeliveryOption: () => {},
  selectedDeliveryOption: {
    title: "test",
    price: 123,
    description: "test",
    expectedDeliveryTime: 2,
    imageId: "test",
    imageURL: "test",
  },
});

export const DeliveryOptionProvider: FC = (props) => {
  const [selectedDeliveryOption, setSelectedDeliveryOption] =
    useState<DeliveryOption>();

  const [deliveryOptions, setDeliveryOptions] = useState<DeliveryOption[]>([]);

  const getDeliveryOptions = async () => {
    let data = fetch("http://localhost:5500/api/delivery")
      .then((res) => res.json())
      .then((data) => {
        setDeliveryOptions(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <DeliveryOptionContext.Provider
      value={{
        setSelectedDeliveryOption,
        getDeliveryOptions,
        selectedDeliveryOption,
        deliveryOptions,
      }}
    >
      {props.children}
    </DeliveryOptionContext.Provider>
  );
};

export const useDelivery = () => useContext(DeliveryOptionContext);
