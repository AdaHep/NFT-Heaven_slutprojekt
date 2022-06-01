import { Button } from "@mui/material";
import { CSSProperties, Props } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { useOrder } from "../../../context/OrderContext";

export interface FormValues {
  invoice: number | "";
}

function Invoice() {
  const { deliveryInfo, setDeliveryInfo } = useOrder();
  const navigate = useNavigate();
  const { addPurchaseList, cart, clearCart, totalPrice, newPurchaseTotal } =
    useCart();
  const completePayment = () => {
    let newObject = deliveryInfo;
    newObject.paymentMethod = "Card";
    setDeliveryInfo(newObject);
    addPurchaseList(cart);
    newPurchaseTotal(totalPrice);
    clearCart();
    navigate("/PurchaseComplete");
  };
  return (
    <div style={invoiceInfoBox}>
      <p>
        When choosing invoice as the payment option, the invoice will be sent
        together with your order to your chosen delivery address.
      </p>
      <Button
        style={completePurchaseButton}
        color="primary"
        variant="contained"
        fullWidth
        onClick={() => completePayment()}
      >
        Complete purchase
      </Button>
    </div>
  );
}

export default Invoice;

const invoiceInfoBox: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "clamp(5rem, 60vmin, 20rem)",
};

const completePurchaseButton: CSSProperties = {
  marginTop: "1rem",
  marginBottom: "1rem",
  width: "70%",
};
