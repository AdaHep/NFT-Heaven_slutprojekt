
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
  TextareaAutosize,
  TextField,
} from "@mui/material";
// import { title } from "process";
import { Fragment, useState } from "react";
import { Order, UserOrder} from "../../components/context/OrderContext";

interface Props {
  order: Order;
}

interface userOrder {
  userOrder: UserOrder;
}


function OrderPage(props: Props, userOrder: userOrder) {
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
        <TableCell>{props.order.orderId}</TableCell>
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
                    >{props.order.deliveryOption}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        paddingX: { md: "5rem" },
                      }}
                       style={{ color: "white" }}
                    >{props.order.createdAt}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow >
                    <TableCell
                      align="left"
                      sx={{
                        paddingX: { md: "5rem" },
                      }}
                    >
                    
      
                    </TableCell>

                    <TableCell align="center"  style={{ color: "white" }}> {userOrder.userOrder.customer}</TableCell>
                    <TableCell align="center">

                        <TextField
                          variant="standard"
                       
                          inputProps={{ style: { fontSize: ".9rem" } }}
                          InputLabelProps={{ style: { fontSize: ".9rem" } }}
                        />

                    </TableCell>
                    <TableCell align="center">
        
                        <TextField
                          variant="standard"

                          inputProps={{ style: { fontSize: ".9rem" } }}
                          InputLabelProps={{ style: { fontSize: ".9rem" } }}
                        />
       
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                     style={{ color: "white" }}
                    >
                      {userOrder.userOrder.deliveryAddress}
                    </TableCell>
                    <TableCell
                     style={{ color: "white" }}
                    >
                      {userOrder.userOrder.isSent}
                    </TableCell>
                  </TableRow>

                  {/* <TableCell
                    colSpan={5}
                    align="left"
                    sx={{
                      paddingX: { md: "5rem" },
                    }}
                  >

                  </TableCell> */}
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