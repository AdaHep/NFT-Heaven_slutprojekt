import { Button } from "@mui/material";
import { CSSProperties, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../components/context/ProductContext";
import ProductCard from "../components/ProductCard";

function ProductPage() {
  const { fetchProductsFromDb, setTheSelectedCategory } = useProducts();

  useEffect(() => {
    fetchProductsFromDb();
  }, []);

  const { products } = useProducts();
  return (
    <div style={rootStyle}>
      <Link style={linkStyle} to="/products/category/MeinerNFT">
        <Button
          style={StyledButton}
          variant="contained"
          href=""
          onClick={() => setTheSelectedCategory("628c92cd1c4eb76ecbc12f55")}
        >
          Meiner NFT
        </Button>
      </Link>
      <Link style={linkStyle} to="/products/category/NoccoNFT">
        <Button
          style={StyledButton}
          variant="contained"
          href=""
          onClick={() => setTheSelectedCategory("628c92cd1c4eb76ecbc12f55")}
        >
          NoccoNFT
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
