import { createContext, useContext, useEffect, useState, FC, useCallback, Dispatch, SetStateAction } from "react";
import { makeReq } from "../../helper";
import { ObjectId, Types } from 'mongoose';
import { Product } from "../../ProductInterface";
import { DeliveryDataInfo } from "../../data/collections/deliveryData";



export interface Order {
  _id?: string; // är detta orderId??? Ska det inte vara samma sak som customer? Med ObjectId. Typ order: ObjectId
  orderId: ObjectId; // Typ så? Funkade inte i order page la in ID istället för orderId
  customer: ObjectId;
  products: Product[];
  createdAt: Date;
  updatedAt: Date;
  quantity?: number;
  deliveryOption?: DeliveryDataInfo;
}

export interface UserOrder {
  customer?: Types.ObjectId;
  products: string[];
  deliveryAddress: Address; //funkar det??
  isSent?: boolean;
}

export interface Address {
  firstName: string;
  lastName: string;
  number: string;
  street: string;
  zipcode: number;
  city: string;
}

export type ClientOrder = Omit<Order, "customer"> & {
  _id?: string;
  customer?: User;
};

export interface User {
  email: string;
  isAdmin: boolean;
}

interface OrderContext {
    orders: Order[];
    getOrders: () => void;
    createOrder: () => void;
}


export const OrderContext = createContext<OrderContext>({
    orders: [],
    getOrders: () => {},
    createOrder: () => {}
});

const OrderProvider: FC = (props: any) => {
    const [orders, setOrders] = useState<Order[]>([]);
    /* add state for quantity */
    const [quantity, setQuantity] = useState<Product>() 
  
    const getOrders = async () => {
      let order = await makeReq("/api/orders", "GET");
        setOrders(order); 
  //Ja här antar jag att vi hämtar ordern med allt vi har stoppat in i 
  // men kan vi göra det med setorders? xD
  //JAg tror det eh.. med setOrder så skapar vi en ny <Order> antar jag. Eller jag vet inte haha
  //Ska vi kalla på the big brain? Aka Adam
      };

  // setOrder ska vi kalla på den i getorders? eller bara i create?

    const createOrder = async () => {
      let newOrder = await makeReq("/api/orders", "POST");
      setOrders(newOrder);
    }

  return (
      <OrderContext.Provider
          value={{
            orders,
            getOrders,
            createOrder,
          }}
      >
          {props.children}
      </OrderContext.Provider>
  );
}

export const useOrder = () => useContext(OrderContext)

export default OrderProvider;