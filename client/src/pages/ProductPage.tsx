import { Button } from "@mui/material";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../components/context/ProductContext";
import ProductCard from "../components/ProductCard";

function ProductPage() {
  const { products, fetchCategoriesFromDb } = useProducts();
  return (
    <div style={rootStyle}>
      <Link style={linkStyle} to="/MeinerNFT">
        <Button
          style={StyledButton}
          variant="contained"
          href=""
          onClick={fetchCategoriesFromDb}
        >
          Meiner NFT
        </Button>
      </Link>
      <div style={itemContainer}>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  // backgroundColor: "#88D9E6",
};

const itemContainer: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

const linkStyle: CSSProperties = {
  textDecoration: "none",
};

const StyledButton: CSSProperties = {
  background: "#2081e2",
  margin: "1rem",
  fontSize: "3vmin",
  fontWeight: "bold",
};
