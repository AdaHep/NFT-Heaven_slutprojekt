import { createContext, useContext, useEffect, useState, FC, useCallback, Dispatch, SetStateAction } from "react";
import { makeReq } from "../../helper";
import { ObjectId, PromiseProvider, Types } from 'mongoose';
import { Product } from "../../ProductInterface";
import { DeliveryDataInfo } from "../../data/collections/deliveryData";
import { useCart } from "./CartContext";
import { useUser } from "./LoginContext";



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
  deliveryAddress: Address; 
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
    createOrder: () => {},
});

const OrderProvider: FC = (props: any) => {
    const { purchaseList, purchaseTotal } = useCart();
    const  [deliveryAddress] = useState<UserOrder>() 
    const [orders, setOrders] = useState<Order[]>([]);
   
    const [quantity, setQuantity] = useState<Product>() 
  
    const getOrders = async () => {
      let order = await makeReq("/api/orders", "GET");
        setOrders(order); 

// då ska post anroppet kopplas till servern på nåt vänster eller hur? Jepp han snackade nåt om det heh
      };

    const createOrder = async () => {
      const order = {
        purchaseList,
        purchaseTotal,
        deliveryAddress 
      }
      let newOrder = await makeReq("/api/orders", "POST", order);
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