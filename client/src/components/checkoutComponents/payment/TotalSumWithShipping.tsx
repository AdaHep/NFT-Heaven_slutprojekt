import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";
import { DeliveryDataInfo } from "../../../data/collections/deliveryData";
import { useCart } from "../../context/CartContext";
import { useOrder } from "../../context/OrderContext";

interface deliveryItem {
  finalTotalSum: number;
  setFinalTotalSum: any;
}

function TotalSumWithShipping(props: deliveryItem) {
  const { deliveryInfo } = useOrder();
  const { totalPrice } = useCart();
  let totalSumWithShipping = 0;

  if (deliveryInfo.deliveryMethod.title === "DHL agent") {
    totalSumWithShipping = totalPrice + 2;
  } else if (deliveryInfo.deliveryMethod.title === "DHL express") {
    totalSumWithShipping = totalPrice + 6;
  } else if (deliveryInfo.deliveryMethod.title === "Postnord home delivery") {
    totalSumWithShipping = totalPrice + 4;
  } else if (deliveryInfo.deliveryMethod.title === "Postnord agent") {
    totalSumWithShipping = totalPrice + 0;
  }
  props.setFinalTotalSum(totalSumWithShipping);

  return (
    <div>
      <div style={totalPriceContainer}>
        <p style={totalPriceText}>
          <div>Total price with shipping:</div>
          <div>
            <FontAwesomeIcon icon={faCoins} />
            &nbsp;{totalSumWithShipping}
          </div>
        </p>
      </div>
    </div>
  );
}

export default TotalSumWithShipping;

const totalPriceContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const totalPriceText: CSSProperties = {
  marginRight: ".1rem",
  fontSize: "1.2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",
};
