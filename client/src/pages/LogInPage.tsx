import { Button } from "@mui/material";
import { CSSProperties, FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/context/LoginContext";

export default function LogInPage() {
const navigate = useNavigate();
 const { fetchUser, logIn } = useContext(UserContext);
const [logInEmail, setLogInEmail] = useState("");
const [logInPassword, setLogInPassword] = useState("");


const handleEmailChange = (e: any) => {
    setLogInEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setLogInPassword(e.target.value);
  };

  const handleLogin = () => {
    fetchUser();
    logIn(logInEmail, logInPassword);
    navigate('/')
  }

  const handleSignUp = () => {}

 
  return (
    <div style={container}>
      <div style={innerContainer}>
        <h2 style={textCenter}>Log In</h2>
        <div style={innerContainer}>
          <label htmlFor="email">Email</label>
          <input name="email" type="text" onChange={handleEmailChange}/>
          <label htmlFor="password">Password</label>
          <input name="password" type="text" onChange={handlePasswordChange}/>
          <Button onClick={handleLogin}>Log in</Button>
        </div>
        <h4 style={textCenter}>
          Don't have account? <br /> Sign up here!
        </h4>
        <div style={innerContainer}>
          <label htmlFor="email">Email</label>
          <input name="email" type="text" />
          <label htmlFor="password">Password</label>
          <input name="password" type="text" />
          <Button onClick={handleSignUp}>Sign up</Button>
        </div>
      </div>
    </div>
  );
}

const container: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const textCenter: CSSProperties = {
  textAlign: "center",
};

const innerContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};
