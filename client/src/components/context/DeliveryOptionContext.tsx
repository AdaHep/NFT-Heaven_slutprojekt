import { createContext, FC, useContext, useState } from "react";
import { makeReq } from "../../helper";

export interface DeliveryOption {
  title: string;
  price: string | number;
  description: string;
  expectedDeliveryTime: string;
  imageId: string;
}

interface DeliveryOptionContext {
  setSelectedDeliveryOption: Function;
  getAllDeliveryOptions: () => Promise<any>;
  selectedDeliveryOption: DeliveryOption | any;
}

export const DeliveryOptionContext = createContext<DeliveryOptionContext>({
  setSelectedDeliveryOption: () => void {},
  getAllDeliveryOptions: async () => void [],
  selectedDeliveryOption: {
    title: "test",
    price: "123",
    description: "test",
    expectedDeliveryTime: "2 dagar",
    imageId: "test",
  },
});

export const DeliveryOptionProvider: FC = (props) => {
  const [selectedDeliveryOption, setSelectedDeliveryOption] =
    useState<DeliveryOption>();

  const getAllDeliveryOptions = async () => {
    try {
      let data = await makeReq("/api/delivery", "GET");
      return data;
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <DeliveryOptionContext.Provider
      value={{
        setSelectedDeliveryOption,
        getAllDeliveryOptions,
        selectedDeliveryOption,
      }}
    >
      {props.children}
    </DeliveryOptionContext.Provider>
  );
};

export const useDelivery = () => useContext(DeliveryOptionContext);
