import { CSSProperties } from "react";
import { useDelivery } from "../context/DeliveryOptionContext";
import { useOrder } from "../context/OrderContext";

function DeliveryInfoTable() {
  const { deliveryInfo } = useOrder();
  const { selectedDeliveryOption } = useDelivery();
  return (
    <div>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td>Name</td>
            <td style={tableDataStyle}>
              {deliveryInfo.firstName + " " + deliveryInfo.lastName}
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td style={tableDataStyle}>{deliveryInfo.email}</td>
          </tr>
          <tr>
            <td>Phone#</td>
            <td style={tableDataStyle}>{deliveryInfo.number}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td style={tableDataStyle}>{deliveryInfo.address}</td>
          </tr>
          <tr>
            <td>Zipcode</td>
            <td style={tableDataStyle}>{deliveryInfo.zipcode}</td>
          </tr>
          <tr>
            <td>City</td>
            <td style={tableDataStyle}>{deliveryInfo.city}</td>
          </tr>
          <tr>
            <td>Delivery method</td>
            <td style={tableDataStyle}>{selectedDeliveryOption}</td>
          </tr>
          <tr>
            <td>Payment method</td>
            <td style={tableDataStyle}>{deliveryInfo.paymentMethod}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DeliveryInfoTable;

const tableStyle: CSSProperties = { gap: "1rem" };

const tableDataStyle: CSSProperties = { paddingLeft: "1rem" };
