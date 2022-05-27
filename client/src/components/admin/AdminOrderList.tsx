import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { CSSProperties, useEffect } from "react";
import OrderPage from "../../pages/OrderPage";
import { useAdminOrder } from "../context/AdminOrderContext";

// import product context
//import AdminProductList from "./AdminProductList";

function AdminOrderList() {

  const { getOrders, orders } = useAdminOrder();
  console.log(orders);

  useEffect(() => {
    getOrders();
  }, [getOrders])

  return (
    <TableContainer component={Paper} sx={{ my: "1.5rem" }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{ backgroundColor: "rgb(32, 129, 226)" }}>
            <TableCell />
            <TableCell align="left"></TableCell>
            <TableCell align="left">
              <Typography variant="subtitle1" fontWeight="bold" color="white">
                ORDER NUMBER
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="subtitle1" fontWeight="bold" color="white">
                DATE
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => {
            <TableRow key={order.customer}>
              <TableCell>
                {order.createdAt}
              </TableCell>
              <TableCell>
                {order.products}
              </TableCell>
              <TableCell>
                {order.deliveryOption}
              </TableCell>
            <TableCell>

            </TableCell>

          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminOrderList;
