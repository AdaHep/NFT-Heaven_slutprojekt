import {
  faCreditCardAlt,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DeliveryDataInfo } from "../../../data/collections/deliveryData";
import { CSSProperties, useState } from "react";
import CreditCard from "./paymentOptions/creditCard";
import Swish from "./paymentOptions/swish";
import Invoice from "./paymentOptions/invoice";
import PaymentModal from "./PaymentModal";
import { useOrder } from "../../context/OrderContext";

interface Props {
  paymentOption: string;
}

function PaymentBox(props: Props) {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  return (
    <div style={paymentBox}>
      {props.paymentOption === "swish" && (
        <div style={Box}>
          <div style={paymentIconSwish}>
            <img
              style={paymentIconImg}
              src="/assets/images/Icons/swish-icon.png"
              alt="swish"
            />
          </div>
          <Swish
            paymentModalOpen={paymentModalOpen}
            setPaymentModal={setPaymentModalOpen}
          />
        </div>
      )}
      {props.paymentOption === "card" && (
        <div style={Box}>
          <div style={paymentIcon}>
            <FontAwesomeIcon style={CardImg} icon={faCreditCardAlt} />
          </div>
          <CreditCard
            paymentModalOpen={paymentModalOpen}
            setPaymentModal={setPaymentModalOpen}
          />
        </div>
      )}
      {props.paymentOption === "invoice" && (
        <div style={Box}>
          <div style={paymentIcon}>
            <FontAwesomeIcon style={CardImg} icon={faFileInvoice} />
          </div>
          <Invoice />
        </div>
      )}
      {paymentModalOpen === true && <PaymentModal />}
    </div>
  );
}

export default PaymentBox;

const paymentBox: CSSProperties = {
  marginTop: "1rem",
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const paymentIconSwish: CSSProperties = {
  width: "12rem",
  borderRadius: "20rem",
  marginBottom: "2rem",
};

const paymentIcon: CSSProperties = {
  width: "12rem",
  borderRadius: "2rem",
  color: "white",
  marginBottom: "2rem",
  display: "flex",
  justifyContent: "center",
};

const Box: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const CardImg: CSSProperties = {
  fontSize: "10rem",
  marginTop: "2rem",
};

const paymentIconImg: CSSProperties = {
  width: "12rem",
  borderRadius: "20rem",
};
