import { createContext, useContext, useEffect, useState, FC, useCallback, Dispatch, SetStateAction } from "react";
import { makeReq } from "../../helper";
import UserProvider, { UserContext } from "./LoginContext";
import { ObjectId, Types } from 'mongoose';

export interface Order {
  customer: ObjectId;
  products: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type ClientOrder = Omit<Order, "customer"> & {
  _id: string;
  customer?: User;
};

export interface User {
  email: string;
  isAdmin: boolean;
}

interface AdminOrderContext {
    orders: Order[];
    getOrders: () => void;
    setOrder: Dispatch<SetStateAction<Order | undefined>>;
    order: Order | undefined;
    
}


export const AdminOrderContext = createContext<AdminOrderContext>({
    orders: [],
    getOrders: () => {},
    setOrder: () => {},
    order: {
        customer: Types.ObjectId,
        products: [],
        createdAt: new Date(),
        email: "",

    },
    deliveryAddress: {
        street: "",
        city: "",
        zip: "",
    }, deliveryOption: {
        title: "",
        price: 0,
        description: "",
        expectedDeliveryTime: 0,
    },
});

const AdminOrderProvider: FC = (props: any) => {
    const [orders, setOrders] = useState<Order[]>([]);
    /* add state for quantity */
    
  const getOrders = useCallback(async () => {
      let order = await makeReq("/api/orders", "GET");
        setOrders(order);
  }, []);

  return (
      <AdminOrderContext.Provider
          value={{
            orders,
            getOrders,
          }}
      >
          {props.children}
      </AdminOrderContext.Provider>
  );
}

export const useAdminOrder = () => useContext(AdminOrderContext)

export default AdminOrderProvider;