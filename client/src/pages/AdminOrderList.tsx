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
import OrderPage from "./OrderPage";

// import product context
//import AdminProductList from "./AdminProductList";

function AdminOrderList
() {
  //const { products } = useAdmin();

  return (
    <TableContainer component={Paper} sx={{ my: "1.5rem" }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{ backgroundColor: "rgb(32, 129, 226)" }}>
            <TableCell />
            <TableCell align="left">
            </TableCell>
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
          <OrderPage />
        
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AdminOrderList
;