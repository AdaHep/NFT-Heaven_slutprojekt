import {
  Container,
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
    <div>
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead style={{ height: "4rem"}}>
          <TableRow style={{ backgroundColor: "rgb(32, 129, 226)", position: "absolute", left: "1%", right: "1%", padding: "1rem"}}>
            <TableCell />
            <TableCell align="left"></TableCell>
            <TableCell align="left">
              <Typography variant="subtitle1" fontWeight="bold" color="white" sx={{position: "absolute", left: "20%", top: "15%"}}>
                ORDER NUMBER
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="subtitle1" fontWeight="bold" color="white" sx={{position: "absolute", right: "20%", top: "15%"}}>
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
    </div>
  );
}

export default AdminOrderList;
