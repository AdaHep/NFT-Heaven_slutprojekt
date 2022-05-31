import { Button } from "@mui/material";
import { CSSProperties, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../components/context/ProductContext";
import ProductCard from "../components/ProductCard";
import "../CSS/ExplorePage.css";

function ProductPage() {
  const { fetchProductsFromDb, products } = useProducts();

  useEffect(() => {
    fetchProductsFromDb();
  }, []);
  return (
    <div style={rootStyle}>
      <div id="categories">
        <Link style={linkStyle} to="/products/category/MeinerNFT">
          <Button style={StyledButton} variant="contained" href="">
            Meiner
          </Button>
        </Link>
        <Link style={linkStyle} to="/products/category/NoccoNFT">
          <Button style={StyledButton} variant="contained" href="">
            Nocco
          </Button>
        </Link>
        <Link style={linkStyle} to="/products/category/BakkumNFT">
          <Button style={StyledButton} variant="contained" href="">
            Bakkum
          </Button>
        </Link>
        <Link style={linkStyle} to="/products/category/PappaNFT">
          <Button style={StyledButton} variant="contained" href="">
            Pappa
          </Button>
        </Link>
        <Link style={linkStyle} to="/products/category/DCNFT">
          <Button style={StyledButton} variant="contained" href="">
            DC
          </Button>
        </Link>
        <Link style={linkStyle} to="/products/category/Formula1NFT">
          <Button style={StyledButton} variant="contained" href="">
            Formula1
          </Button>
        </Link>
      </div>
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
  margin: ".7rem",
  fontSize: "3vmin",
  fontWeight: "bold",
};
