import { Button, Container } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AdminOrderList from "../../components/admin/AdminOrderList";
import { UserContext } from "../../components/context/LoginContext";

function AdminOrderPage() {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };
  
  return (
    <div style={{ minWidth: "360px", maxWidth: "1000px"}}>
      <Container>
      {currentUser?.isAdmin ? (
      <AdminOrderList />
      ) : (
        <>
          <h2>You do not have access to this page</h2>
          <Button onClick={redirect}>Take me back</Button>
          </>
      )}
      </Container>
    </div>
  );
}

export default AdminOrderPage;
