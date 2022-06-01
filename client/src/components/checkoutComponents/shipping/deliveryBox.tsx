import { CSSProperties } from "react";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDelivery } from "../../context/DeliveryOptionContext";
import { GetDelivery } from "./deliverySwitch";

interface deliveryItem {
  deliveryOption: string;
}

function DeliveryBox(props: deliveryItem) {
  const { deliveryOptions, getDeliveryOptions } = useDelivery();

  return (
    <div>
      {props.deliveryOption && (
        <div style={deliveryOptionDescription}>
          <div style={deliveryOptionContainer}>
            <img
              style={deliveryOptionThumbnail}
              srcSet={GetDelivery(props.deliveryOption).image}
              alt="ICON"
            />
            <p style={deliveryDescription}>
              {GetDelivery(props.deliveryOption).description}
            </p>
          </div>
          <div style={shippingPriceContainer}>
            <p> Shipping price: {GetDelivery(props.deliveryOption).price} </p>
            <FontAwesomeIcon icon={faCoins} style={coinIcon} />
          </div>
        </div>
      )}
      <div style={deliveryDateText}>
        <p>{GetDelivery(props.deliveryOption).time}</p>
      </div>
    </div>
  );
}

export default DeliveryBox;

const deliveryOptionDescription: CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "1rem",
  paddingBottom: "1rem",
};

const deliveryOptionContainer: CSSProperties = { display: "flex" };

const deliveryDescription: CSSProperties = {
  fontSize: ".8rem",
  display: "flex",
  alignItems: "center",
};

const shippingPriceContainer: CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const coinIcon: CSSProperties = { marginLeft: "0.3rem" };

const deliveryOptionThumbnail: CSSProperties = {
  padding: "0.5rem",
  height: "4rem",
  borderRadius: "50%",
};

const deliveryDateText: CSSProperties = {
  textAlign: "center",
  fontSize: "1.2rem",
};
