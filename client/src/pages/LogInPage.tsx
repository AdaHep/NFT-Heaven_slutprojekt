import { CSSProperties } from "react";

export default function LogInPage() {
  return (
    <div style={container}>
      <div style={innerContainer}>
        <h2>Log In</h2>
        <div style={innerContainer}>
          <label htmlFor="email">Email</label>
          <input name="email" type="text" />
          <label htmlFor="password">Password</label>
          <input name="password" type="text" />
        </div>
        <h5>
          Don't have account? <br /> Sign up here!
        </h5>
        <div style={innerContainer}>
          <label htmlFor="email">Email</label>
          <input name="email" type="text" />
          <label htmlFor="password">Password</label>
          <input name="password" type="text" />
        </div>
      </div>
    </div>
  );
}
const container: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const innerContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};
