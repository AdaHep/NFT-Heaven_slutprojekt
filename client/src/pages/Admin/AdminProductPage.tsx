import { CSSProperties, useEffect } from "react";
import EditNFT from "../../components/admin/editNFT";
import { useProducts } from "../../components/context/ProductContext";
import AdminProductCard from "./AdminProductCard";
import { Product, Category } from "../../ProductInterface";

function AdminProductPage() {
  const { fetchProductsFromDb, products, selectedNFT } = useProducts();
  useEffect(() => {
    fetchProductsFromDb();
  }, []);

  return (
    <div style={rootStyle}>
      <div style={itemContainer}>
        <EditNFT product={selectedNFT} />
        {products.map((product, index) => (
          <AdminProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AdminProductPage;

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

const adminPageLayout: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  overflowX: "hidden",
  paddingBottom: "2rem",
};

const adminCollections: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  boxShadow: "1px 1px 6px black",
  borderRadius: ".5rem",
  width: "90%",
  padding: "0 1rem 1rem 1rem",
  gap: "1rem",
};

const adminCollectionsHeader: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  gap: "1rem",
  width: "100%",
  flexWrap: "wrap",
};

const adminAddStyle: CSSProperties = {
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: "1px 1px 6px black",
  borderRadius: ".5rem",
  background: "#303339",
  width: "clamp(12vmin, 33vmin, 8.5rem",
  padding: "1rem",
  textAlign: "center",
  position: "relative",
};

const adminCardHeader: CSSProperties = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
};

const adminImageStyle: CSSProperties = {
  width: "90%",
  maxHeight: "30vh",
};

const adminCollectionMain: CSSProperties = {
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  justifyContent: "center",
};

const headerLeft: CSSProperties = {
  display: "flex",
  gap: "1rem",
  alignItems: "center",
};

const descStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  height: "100%",
  fontSize: "clamp(1.5vmin, 2vmin, 1rem)",
};

const headerRight: CSSProperties = {
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  justifyContent: "center",
};

const buttonStyle: CSSProperties = {
  fontWeight: "bold",
  background: "rgb(32, 129, 226)",
  color: "white",
  fontSize: "small",
  width: "10rem",
};

const editButtonStyle: CSSProperties = {
  fontWeight: "bold",
  background: "#2081e2",
  color: "white",
  fontSize: "small",
  width: "100%",
  marginTop: "auto",
  justifySelf: "flex-end",
};

const removeButton: CSSProperties = {
  position: "absolute",
  right: ".6rem",
  top: ".6rem",
  fontSize: "1.3rem",
  cursor: "pointer",
};
