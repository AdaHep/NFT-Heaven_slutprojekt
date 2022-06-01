import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { CSSProperties, useState } from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { DeliveryDataInfo } from "../../data/collections/deliveryData";
import DeliveryBox from "./shipping/deliveryBox";
import { useOrder } from "../context/OrderContext";
import { useUser } from "../context/LoginContext";
import { DeliveryOption, useDelivery } from "../context/DeliveryOptionContext";

const validationSchema = yup.object({
  firstName: yup.string().required("Please enter first name").min(2),
  lastName: yup.string().required("Please enter last name").min(2),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  number: yup.number().required("Please enter number").min(10),
  zipCode: yup.number().required("Please enter zipcode").min(4),
  city: yup.string().required("Please enter your city").min(2),
  address: yup.string().required("Please enter your adress").min(8),
});

function CheckoutForm() {
  const { currentUser } = useUser();
  const { deliveryInfo, setDeliveryInfo } = useOrder();
  const { deliveryOptions, setSelectedDeliveryOption, selectedDeliveryOption } =
    useDelivery();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      deliveryMethod: {},
      address: "",
      zipCode: "",
      city: "",
      paymentMethod: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setSelectedDeliveryOption(values.deliveryMethod);
      setDeliveryInfo(values);

      // kolla om användaren är inloggad annars navigera till sign in
      if (!currentUser) {
        navigate("/login");
      } else {
        navigate("/PaymentPage");
      }
    },
  });

  const handleSelectedDelivery = (event: any) => {
    setSelectedDeliveryOption(event.target.value);
  };
  return (
    <div style={rootStyle}>
      <div style={detailFormContainer}>
        <h2>Shipment details</h2>
        <div>
          <form style={formStyle} onSubmit={formik.handleSubmit}>
            <div style={textFieldsContainer}>
              <TextField
                style={textFieldStyle}
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <TextField
                style={textFieldStyle}
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
              <TextField
                style={textFieldStyle}
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                style={textFieldStyle}
                fullWidth
                id="number"
                name="number"
                label="Phone Number"
                value={formik.values.number}
                onChange={formik.handleChange}
                error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}
              />
              <TextField
                style={textFieldStyle}
                fullWidth
                id="address"
                name="address"
                label="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
              <TextField
                style={textFieldStyle}
                fullWidth
                id="zipCode"
                name="zipCode"
                label="Zip code"
                value={formik.values.zipCode}
                onChange={formik.handleChange}
                error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                helperText={formik.touched.zipCode && formik.errors.zipCode}
              />
              <TextField
                style={textFieldStyle}
                fullWidth
                id="city"
                name="city"
                label="City"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </div>

            <Box style={deliveryBox}>
              <h2>Delivery details</h2>
              <FormControl fullWidth>
                <InputLabel id="deliveryOption">Delivery Option</InputLabel>
                <Select
                  labelId="deliveryOptionLabel"
                  id="deliveryOption"
                  value={selectedDeliveryOption}
                  label="Delivery Option"
                  onChange={handleSelectedDelivery}
                  required
                >
                  {deliveryOptions.map((deliveryOption: DeliveryOption) => (
                    <MenuItem
                      value={deliveryOption.title}
                      key={deliveryOption.title}
                      style={menuItemStyle}
                    >
                      <div style={{ fontWeight: "bold" }}>
                        {deliveryOption.title}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: ".5rem",
                          justifyContent: "center",
                        }}
                      >
                        <div>Price: {deliveryOption.price}</div>
                        <div>
                          Delivery time: {deliveryOption.expectedDeliveryTime}{" "}
                          {""}
                          days
                        </div>
                      </div>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* <div style={deliveryBox}>
                <DeliveryBox deliveryOption={deliveryOption} />
              </div> */}
            </Box>

            <Button
              style={nextButtonStyle}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Next
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  width: "100%",
  // border: "2px solid #88D9E6",
};

const detailFormContainer: CSSProperties = {
  color: "white",
  minWidth: "15rem",
  marginBottom: "2rem",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const textFieldStyle: CSSProperties = {
  marginBottom: "1rem",
  width: "40%",
  margin: ".5rem",
};

const formStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  flexDirection: "column",
};

const deliveryBox: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  minWidth: "60vmin",
  maxWidth: "3rem",
  textAlign: "center",
};

const textFieldsContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
};

const nextButtonStyle: CSSProperties = {
  marginTop: "1rem",
  width: "40vmin",
  background: "#2081e2",
  fontWeight: "bold",
};

const menuItemStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  // width: "10rem",
  gap: ".5rem",
  flexWrap: "wrap",
  background: "rgb(48, 51, 57)",
  color: "white",
};
