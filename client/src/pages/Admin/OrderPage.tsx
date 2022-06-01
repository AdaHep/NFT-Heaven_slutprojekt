
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Collapse,
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
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset", backgroundColor: "rgb(48, 51, 57)", color: "white" } }}>
        <TableCell>
          <IconButton style={{ color: "white" }}
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          
        </TableCell>
        <TableCell style={{color: "#fff"}}>{props.order._id}</TableCell>
        <TableCell style={{color: "#fff"}}>{props.order.createdAt}</TableCell>
      </TableRow >
      {/* All info om produkten som är klickad*/}
      <TableRow>
        <TableCell
          style={{
            padding: 0,
            backgroundColor: "rgb(48, 51, 57)",
          }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small" aria-label="purchases" style={{ border: "none"}}>
                <TableHead>
                  <TableRow>
                    
                    <TableCell align="center" style={{ color: "white" }}>
                      {props.order.products.map((product) => (
                        <TableRow key={product.name}>
                          <TableCell style={{ color: "white", position: "absolute", left: "50%", border: "none"}}>
                           PRODUCT: {product.name}
                            </TableCell>
                        </TableRow>    
                      ))}
                    </TableCell>
                  </TableRow>
                </TableHead >
                <TableBody>
                  <TableRow >
                    <TableCell align="center"  style={{ color: "white", border: "none" }}>
                    NAME:{props.order.deliveryAddress?.firstName} {props.order.deliveryAddress?.lastName}</TableCell>
                  </TableRow>
                  <TableRow>
                    
                    <TableCell
                     style={{ color: "white" }}
                    >
                     STREET:{props.order.deliveryAddress?.street}
                    </TableCell>
                    <TableCell
                     style={{ color: "white" }}
                    >
                    CITY:{props.order.deliveryAddress?.city}
                    </TableCell>
                    <TableCell
                     style={{ color: "white" }}
                    >
                    ZIPCODE:{props.order.deliveryAddress?.zipcode}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

export default OrderPage;