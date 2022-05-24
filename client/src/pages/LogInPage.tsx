import { Button } from "@mui/material";
import { CSSProperties } from "react";

export default function LogInPage() {
  return (
    <div style={container}>
      <div style={innerContainer}>
        <h2 style={textCenter}>Log In</h2>
        <div style={innerContainer}>
          <label htmlFor="email">Email</label>
          <input name="email" type="text" />
          <label htmlFor="password">Password</label>
          <input name="password" type="text" />
          <Button>Log in</Button>
        </div>
        <h4 style={textCenter}>
          Don't have account? <br /> Sign up here!
        </h4>
        <div style={innerContainer}>
          <label htmlFor="email">Email</label>
          <input name="email" type="text" />
          <label htmlFor="password">Password</label>
          <input name="password" type="text" />
          <Button>Sign up</Button>
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
