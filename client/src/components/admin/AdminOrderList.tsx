import {
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import OrderPage from "../../pages/Admin/OrderPage";
import { useOrder } from "../context/OrderContext";


function AdminOrderList() {
  const { getOrders, orders } = useOrder();
  useEffect(() => {
    getOrders();
      console.log(orders)
  }, []);

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
            return <OrderPage key={order._id} order={order}/>
          })} 
            </TableBody>
      </Table>
      
    </TableContainer>
  );
}

export default AdminOrderList;
