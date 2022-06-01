
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Fragment, useState } from "react";
import { Order, UserOrder} from "../../components/context/OrderContext";

interface Props {
  order: Order;
}

interface UserProps {
  userOrder: UserOrder;
}


function OrderPage(props: Props, userProps: UserProps) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset", backgroundColor: "rgb(48, 51, 57)", color: "white" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          
        </TableCell>
        <TableCell>{props.order._id}</TableCell>
        <TableCell>{props.order.createdAt}</TableCell>
      </TableRow>
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
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{ color: "white" }}>
                      {props.order.orderId} 
                    </TableCell>
                    <TableCell align="center" style={{ color: "white" }}>
                      {props.order.products}
                    </TableCell>
                    <TableCell align="center" style={{ color: "white" }}>
                      {props.order.quantity}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        paddingX: { md: "5rem" },
                      }}
                       style={{ color: "white" }}
                    >{userProps.userOrder.customer}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        paddingX: { md: "5rem" },
                      }}
                       style={{ color: "white" }}
                    >{userProps.userOrder.deliveryAddress}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow >
                    <TableCell align="center"  style={{ color: "white" }}>
                      {userProps.userOrder.isSent}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                     style={{ color: "white" }}
                    >
                      {/* something here? */}
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