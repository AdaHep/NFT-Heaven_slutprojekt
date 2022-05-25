import { Button } from "@mui/material";
import { CSSProperties } from "react";
import CategoryCard from "../components/CategoryCard";
import { useProducts } from "../components/context/ProductContext";
// import CategoryCard from "../components/CategoryCard";

function CollectionPage() {
  const { collections } = useProducts();
  console.log(collections);
  return (
    <div>
      <div style={buttonsDivStyle}>
      <Button style={buttonStyle}>SELFIES</Button>
      <Button style={buttonStyle}>LOGOS</Button>
      <Button style={buttonStyle}>THINGS</Button>
      </div>
   
      {/* <h1 style={collectionsTitle}>Here are all the available collections:</h1> */}
      <div style={flexProducts}>
        {collections.map((collection, index) => (
          <CategoryCard key={index} collectionCard={collection} />
        ))}
      </div> 
    </div>
  );
}

const flexProducts: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  justifyContent: "center",
  margin: "5rem 0",
};

// const collectionsTitle: CSSProperties = {
//   textAlign: "center",
// };

const buttonStyle: CSSProperties = {
    fontWeight: "bold",
    background: "rgb(32, 129, 226)",
    color: "white",
    fontSize: "small",
    width: "8rem",
    margin: "1rem"
};

const buttonsDivStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
}
export default CollectionPage;
