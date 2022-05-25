import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";
// import { collectionDataItem, NftItem } from "../data/collections/collection";
// import { Button } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useCart } from "./context/CartContext";
// import FlipCard from "./FlipCard";
import "react-toastify/dist/ReactToastify.css";
import { useProducts } from "./context/ProductContext";
import { Product } from "../ProductInterface";
import { Button } from "@mui/material";
import FlipCard from "./FlipCard";

//function ItemCard(props: cardInfo) {

interface Props {
  product: Product;
}

function ProductCard(props: Props) {
  // const { addProduct } = useCart();

  return (
    <div>
      <div style={cardContainer}>
        <div style={cardHeader}>
          {/* Detta behöver fixas när kategorier är på plats */}
          {/* <img
              style={collectionImage}
              srcSet={nftInfo.headerImage}
              alt="headerImg"
            /> */}
          <div style={headerText}>
            <div>{props.product.name}</div>
            <div style={priceStyle}>
              Price:
              <div>
                <FontAwesomeIcon icon={faCoins} style={coinIconStyle} />
                {props.product.price}
              </div>
            </div>
          </div>
        </div>
        <p style={clickMeStyle}>Click me!</p>
        <div style={cardContent}>
          <FlipCard nftCard={props.product} />
          <Button
            style={buttonStyle}
            variant="contained"
            // onClick={() => addProduct(props.nftCard)}
          >
            BUY NOW
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

const cardContainer: CSSProperties = {
  width: "20rem",
  borderRadius: ".5rem",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: "1rem",
  background: "#303339",
  boxShadow: "1px 1px 6px black",
  position: "relative",
};
const cardPicture: CSSProperties = {
  width: "18rem",
};

const clickMeStyle: CSSProperties = {
  margin: 0,
  position: "absolute",
  zIndex: "100",
  top: "23%",
  left: "1%",
  fontWeight: "bold",
  fontSize: "smaller",
  transform: "rotate(-30deg)",
  background: "#2081e2",
  padding: ".5rem",
  pointerEvents: "none",
};

const productImage: CSSProperties = {
  width: "100%",
};

const priceStyle: CSSProperties = {
  fontSize: "1rem",
  display: "flex",
  justifyContent: "space-between",
};

const coinIconStyle: CSSProperties = { paddingRight: ".3rem" };

const buttonStyle: CSSProperties = {
  fontWeight: "bold",
  background: "#2081e2",
  color: "white",
};

const cardHeader: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  margin: "1rem",
};

const headerText: CSSProperties = {
  textAlign: "center",
  fontSize: "1.5rem",
};

const collectionImage: CSSProperties = {
  width: "4rem",
  display: "flex",
  alignItems: "center",
};

const cardContent: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  width: "95%",
  padding: ".5rem",
};
