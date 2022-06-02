import { CSSProperties } from "react";

function Footer() {
  return (
    <div>
      <div style={footerStyle}>
        © Created by AdaHep, mirrenil and elinarnten, 2022.
      </div>
    </div>
  );
}

const footerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  padding: "3rem 1rem 1rem 1rem",
};

export default Footer;
