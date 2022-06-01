import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";
import DeliveryInfoTableWithPay from "../components/checkoutComponents/DeliveryInfoTableWithPay";
import GenerateOrderNumber from "../components/checkoutComponents/OrderNumber";
import { useCart } from "../components/context/CartContext";
import { useDelivery } from "../components/context/DeliveryOptionContext";
import { useOrder } from "../components/context/OrderContext";
// import { useProducts } from "../components/context/ProductContext";
// import { NftItem } from "../data/collections/collection";
// import { DeliveryDataInfo } from "../data/collections/deliveryData";
import { Product } from "../ProductInterface";

interface Props {
  finalTotalSum: number;
}

function PurchaseComplete(props: Props) {
  const { purchaseList, purchaseTotal } = useCart();
  const { selectedDeliveryOption } = useDelivery();

  let totalSumWithShipping = 0;

  if (selectedDeliveryOption.title === "DHL agent") {
    totalSumWithShipping = purchaseTotal + 2;
  } else if (selectedDeliveryOption.title === "DHL express") {
    totalSumWithShipping = purchaseTotal + 6;
  } else if (selectedDeliveryOption.title === "Postnord home delivery") {
    totalSumWithShipping = purchaseTotal + 4;
  }

  return (
    <div>
      <div style={rootStyle}>
        <div style={purchaseCompleteContainer}>
          <h2 style={purchaseCompleteTextStyle}>Purchase complete!</h2>
          <div>
            <GenerateOrderNumber />
            <h2 style={deliveryDetailsTextStyle}>Delivery details</h2>
            <DeliveryInfoTableWithPay />
          </div>
          <div style={totalPriceContainer}>
            <h2 style={totalPriceTextStyle}>
              Total price: {totalSumWithShipping}
            </h2>
            <FontAwesomeIcon icon={faCoins} style={coinIcon} />
          </div>
          <h2>Your purchase:</h2>
          <div style={cardContainer}>
            <div style={purchasedItems}>
              {purchaseList.map((item: Product, index: number) => (
                <div style={purchasedItemTestCard} key={index}>
                  <div style={itemCountBadge}>
                    <p style={itemCountTextStyle}>{item.quantity}</p>
                  </div>
                  <div style={cardBody}>
                    <div style={cardImageContainer}>
                      <img
                        srcSet={item.imageURL}
                        style={cardImageStyle}
                        alt="item"
                      />
                    </div>
                  </div>
                  <div style={cardFooter}>
                    <div>
                      Price per item: {item.price} &nbsp;
                      <FontAwesomeIcon icon={faCoins} style={coinIcon2} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseComplete;

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  width: "100%",
};

const purchaseCompleteContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "80%",
  background: "#202225",
  marginBottom: "2rem",
};

const purchaseCompleteTextStyle: CSSProperties = {
  fontSize: "2rem",
  textAlign: "center",
};

const deliveryDetailsTextStyle: CSSProperties = {
  textAlign: "center",
  marginTop: "0",
};

const totalPriceContainer: CSSProperties = { display: "flex" };

const totalPriceTextStyle: CSSProperties = { marginRight: ".1rem" };

const coinIcon: CSSProperties = { marginTop: "1.8rem" };

const coinIcon2: CSSProperties = { marginTop: "0.1rem" };

const purchasedItems: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  gap: "1rem",
  margin: 0,
  flexWrap: "wrap",
};

const purchasedItemTestCard: CSSProperties = {
  boxShadow: "1px 1px 6px black",
  borderRadius: ".5rem",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  background: "#303339",
  gap: "1rem",
  padding: "1rem",
  width: "clamp(12vmax, 30vmax, 5rem)",
  position: "relative",
};

const cardContainer: CSSProperties = {
  width: "100%",
  borderRadius: ".5rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "1rem",
};

const cardBody: CSSProperties = {
  width: "90%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const cardFooter: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  fontSize: "clamp(2vmin, 2.5vmin, 1.2rem)",
};
const cardHeader: CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "clamp(2vmin, 3vmin, 1.2rem)",
};

const cardHeaderTextStyle: CSSProperties = { margin: 0 };

const cardImageContainer: CSSProperties = { width: "100%" };

const cardImageStyle: CSSProperties = { width: "100%" };

const itemCountBadge: CSSProperties = {
  position: "absolute",
  top: "-.5rem",
  right: "-.5rem",
  width: "1.5rem",
  height: "1.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "100%",
  fontSize: "1rem",
  color: "white",
  background: "#2081e2",
};

const itemCountTextStyle: CSSProperties = {
  textAlign: "center",
  width: "100%",
  letterSpacing: 0,
  fontWeight: "bold",
};
