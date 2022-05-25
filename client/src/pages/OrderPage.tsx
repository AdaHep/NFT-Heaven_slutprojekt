
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

function OrderPage() {
//   const { isEdit, setEdit, saveProduct } = useAdmin();

  const [open, setOpen] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset", backgroundColor: "#888", color: "white" } }}>
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
        <TableCell>add order number here</TableCell>
        <TableCell> add order date here</TableCell>
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
                      Order Number
                    </TableCell>
                    <TableCell align="center" style={{ color: "white" }}>
                      NFT Name
                    </TableCell>
                    <TableCell align="center" style={{ color: "white" }}>
                      Quantity
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        paddingX: { md: "5rem" },
                      }}
                       style={{ color: "white" }}
                    >Order date</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        paddingX: { md: "5rem" },
                      }}
                       style={{ color: "white" }}
                    >Price per NFT</TableCell>
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

                    <TableCell align="center"  style={{ color: "white" }}> THE NAME here</TableCell>
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
                      Delivery Address
                    </TableCell>
                    <TableCell
                     style={{ color: "white" }}
                    >
                      Delivery Option
                    </TableCell>
                    <TableCell
                     style={{ color: "white" }}
                    >
                      Total Price
                    </TableCell>
                  </TableRow>

                  <TableCell
                    colSpan={5}
                    align="left"
                    sx={{
                      paddingX: { md: "5rem" },
                    }}
                  >

                  </TableCell>
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