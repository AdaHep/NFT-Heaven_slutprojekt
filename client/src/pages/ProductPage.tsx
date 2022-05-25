import { CSSProperties } from "react";
import { useProducts } from "../components/context/ProductContext";
import ProductCard from "../components/ProductCard";

function ProductPage() {
  const { products, fetchProductsFromDb } = useProducts();
  return (
    <div style={rootStyle}>
      <div>
        <button onClick={fetchProductsFromDb}>Fetch products</button>
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
  // backgroundColor: "#88D9E6",
};

const itemContainer: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};
