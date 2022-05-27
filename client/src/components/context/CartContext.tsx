import { createContext, FC, useContext, useState } from "react";
import { toast } from "react-toastify";
import { Product } from "../../ProductInterface";

interface Cart {
  purchaseList: Product[];
  cart: Product[];
  addProduct: (item?: Product) => void;
  incQty: (name: string) => void;
  decQty: (name: string) => void;
  clearCart: () => void;
  addPurchaseList: (list: Product[]) => void;
  totalPrice: number;
  purchaseTotal: number;
  newPurchaseTotal: (total: number) => void;
  // purchaseTotal : number;
  // addPurchaseTotal: (plus: number) => void;
}

export const CartContext = createContext<Cart>({
  purchaseList: [],
  addPurchaseList: (list: Product[]) => {},
  cart: [],
  addProduct: (item?: Product) => {},
  incQty: (name: string) => {},
  decQty: (name: string) => {},
  clearCart: () => {},
  totalPrice: 1,
  purchaseTotal: 1,
  newPurchaseTotal: (total: number) => {},
  // purchaseTotal: 1,
  // addPurchaseTotal: (plus : number) => {},
});

export const CartProvider: FC = (props) => {
  let localData = localStorage.getItem("cart");
  const [cart, setCart] = useState<Product[]>(
    localData ? JSON.parse(localData) : []
  );
  const [purchaseList, setPurchaseList] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  const [purchaseTotal, setPurchaseTotal] = useState(1);
  // const [purchaseTotal, setPurchaseTotal] = useState(purchaseList.reduce((sum, nft) => sum + nft.price * nft.count, 0))

  const addPurchaseList = (list: Product[]) => {
    setPurchaseList(list);
    // setPurchaseTotal(totalPrice);
  };

  const newPurchaseTotal = (total: number) => {
    setPurchaseTotal(total);
  };

  const addProduct = (item?: Product) => {
    toast.success("Item added to cart", {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      pauseOnHover: false,
    });
    let NewProductList = cart;
    let foundItem = NewProductList.find(
      (listedItem: any) => listedItem.name === item?.name
    );
    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      if (item) {
        item.quantity = 1;
      }
      NewProductList.push(
        item || {
          categories: [],
          name: "test",
          description: "test",
          price: 420,
          quantity: 1,
          imageId: "test",
          imageURL: "test",
        }
      );
    }
    setCart(NewProductList);
    setTotalPrice(
      cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
    localStorage.setItem("cart", JSON.stringify(NewProductList));
  };

  const incQty = (name: string) => {
    let updatedList = cart.map((item: Product) => {
      if (item.name === name) {
        item.quantity += 1;
      }
      return item;
    });
    setCart(updatedList);
    setTotalPrice(
      cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
    localStorage.setItem("cart", JSON.stringify(updatedList));
  };

  const decQty = (name: string) => {
    let updatedList = cart.filter((item: Product) => {
      if (item.name === name) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          return item;
        } else {
          item.quantity = 0;
        }
      } else {
        return item;
      }
    })!;
    setCart(updatedList);
    setTotalPrice(
      cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
    localStorage.setItem("cart", JSON.stringify(updatedList));
  };

  const clearCart = () => {
    setCart([]);
    setTotalPrice(0);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <CartContext.Provider
      value={{
        addPurchaseList,
        purchaseList,
        cart,
        addProduct,
        incQty,
        decQty,
        clearCart,
        totalPrice,
        purchaseTotal,
        newPurchaseTotal,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
