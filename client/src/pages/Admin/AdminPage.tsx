import { Button } from "@mui/material";
import { fontWeight, display } from "@mui/system";
import React, { CSSProperties, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../components/context/LoginContext";
import { useOrder } from "../../components/context/OrderContext";

const AdminPage = () => {
  const { currentUser } = useContext(UserContext);
  const { getOrders } = useOrder();
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/');
  }

  const handleGetOrders = () => {
    getOrders();
  }
  return (
    <div>
      {currentUser?.isAdmin ? (
        <>
        <div style={adminStyle}>
        <h2>Admin Page</h2>
      </div>
      <div style={buttonDivStyle}>
        <Button style={buttonStyle} variant="contained">
          <Link style={linkStyle} to="/adminProductPage">
            Edit products
          </Link>
        </Button>
        <Button onClick={handleGetOrders} style={buttonStyle} variant="contained">
          <Link style={linkStyle} to="/adminOrderPage">
            See orders
          </Link>
        </Button>
      </div>
      </>
      ) : (
        <>
          <h2>You do not have access to this page</h2>
          <Button onClick={redirect}>Take me back</Button>
          </>
        )}
    </div>
  );
};
const buttonStyle: CSSProperties = {
  fontWeight: "bold",
  background: "rgb(32, 129, 226)",
  color: "white",
  fontSize: "small",
  width: "10rem",
  margin: "1rem",
};

const linkStyle: CSSProperties = {
  textDecoration: "none",
  color: "white",
};

const buttonDivStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  alignContent: "center",
};

const adminStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};
export default AdminPage;
