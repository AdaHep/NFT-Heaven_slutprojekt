
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Collapse,
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Fragment, useState } from "react";
import { Order, UserOrder, Address} from "../../components/context/OrderContext";

interface Props {
  order: Order;
}
interface AddressProps {
  address: Address
}
// interface UserProps {
//   userOrder: UserOrder;
// }


function OrderPage(props: Props, addressProps: AddressProps) {
  const [open, setOpen] = useState(false);

  return (
    <Container sx={{ minWidth: "360px", maxWidht: "800px", padding: "0", margin: "0" }}>
      <TableRow sx={{ "& > *": { borderBottom: "unset", color: "white" } }}>
        <TableCell>
          <IconButton style={{ color: "white", width: "1rem" }}
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{color: "#fff", position: "absolute", left: "10%", border: "none"}}>
          {props.order._id}</TableCell>
        <TableCell style={{color: "#fff", position: "absolute", right: "8%", border: "none"}}>
         {props.order.createdAt.toString().substring(0,10)}</TableCell>
      </TableRow >
      {/* All info om produkten som är klickad*/}
      <TableRow>
        <TableCell
          style={{
            padding: 0
          }}
          colSpan={4}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{ color: "white" }}>
                      {props.order.products.map((product) => (
                        <TableRow key={product.name}>
                          <TableCell style={{ color: "white", position: "absolute", left: "50%", border: "none"}}>
                           PRODUCT NAME {product.name}
                            </TableCell>
                        </TableRow>    
                      ))}
                    </TableCell>
                  </TableRow>
                </TableHead >
                <TableBody>
                  <TableRow >
                    <TableCell align="center"  style={{ color: "white", border: "none" }}>
                    CUSTOMER    {props.order.deliveryAddress?.firstName} {props.order.deliveryAddress?.lastName}</TableCell>
                  </TableRow>
                  <TableRow sx={{ border: "none"}}>
                    
                    <TableCell
                     style={{ color: "white" }}
                    >
                   STREET {props.order.deliveryAddress?.street}
                    </TableCell>
                    <TableCell
                     style={{ color: "white" }}
                    >
                    CITY {props.order.deliveryAddress?.city}
                    </TableCell>
                    <TableCell
                     style={{ color: "white" }}
                    >
                    ZIPCODE {props.order.deliveryAddress?.zipcode}
                    
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Container>
  )
}

export default OrderPage;