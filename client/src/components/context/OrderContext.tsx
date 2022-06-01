import {
  createContext,
  useContext,
  useEffect,
  useState,
  FC,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { makeReq } from "../../helper";
import { ObjectId, PromiseProvider, Types } from "mongoose";
import { Product } from "../../ProductInterface";
import {
  DeliveryDataInfo,
  DeliveryDataInfoObject,
} from "../../data/collections/deliveryData";
import { useCart } from "./CartContext";
import { useUser } from "./LoginContext";

export interface Order {
  _id?: string;
  orderId: ObjectId;
  customer: ObjectId;
  products: Product[];
  createdAt: Date;
  updatedAt: Date;
  quantity?: number;
  deliveryOption?: string;
  deliveryAddress?: Address;
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
  deliveryInfo: DeliveryDataInfo;
  setDeliveryInfo: Function;
}

export const OrderContext = createContext<OrderContext>({
  orders: [],
  getOrders: () => [],
  createOrder: () => {},
  deliveryInfo: DeliveryDataInfoObject,
  setDeliveryInfo: () => {},
});

const OrderProvider: FC = (props: any) => {
  const { purchaseList, purchaseTotal } = useCart();
  const [deliveryAddress] = useState<UserOrder>();
  const [orders, setOrders] = useState<Order[]>([]);
  const [deliveryInfo, setDeliveryInfo] = useState(DeliveryDataInfoObject);

  const { cart, totalPrice } = useCart();

  const [quantity, setQuantity] = useState<Product>();

  const getOrders = async () => {
    let order = fetch("http://localhost:5500/api/order")
      .then((res) => res.json())
      .then((order) => {
        setOrders(order);
        console.log(orders);
      })
      .catch((err) => {
        console.log(err);
        console.log("failed to fetch orders");
      });
  };

  // const createOrder = async () => {
  //   const order = {
  //     purchaseList,
  //     purchaseTotal,
  //     deliveryAddress,
  //   };
  //   let newOrder = await makeReq("/api/orders", "POST", order);
  //   setOrders(newOrder);
  // };

  const createOrder = async () => {
    const address = {
      firstName: deliveryInfo.firstName,
      lastName: deliveryInfo.lastName,
      number: deliveryInfo.number,
      street: deliveryInfo.address,
      zipcode: deliveryInfo.zipCode,
      city: deliveryInfo.city,
    };

    const deliveryMethod = {
      title: deliveryInfo.deliveryMethod.title,
      price: deliveryInfo.deliveryMethod.price,
      description: deliveryInfo.deliveryMethod.description,
      expectedDeliveryTime: deliveryInfo.deliveryMethod.expectedDeliveryTime,
      imageId: deliveryInfo.deliveryMethod.imageId,
    };
    const paymentMethod = deliveryInfo.paymentMethod;

    const order = {
      products: cart,
      deliveryAddress: address,
      deliveryMethod: deliveryMethod,
      paymentMethod: paymentMethod,
    };

    console.log(order);

    try {
      let sendToDB = await makeReq<Order>(`/api/order`, "POST", order);
      console.log(sendToDB);
    } catch (err) {
      return console.log(err);
    }

    createOrder();
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        getOrders,
        createOrder,
        deliveryInfo,
        setDeliveryInfo,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);

export default OrderProvider;
