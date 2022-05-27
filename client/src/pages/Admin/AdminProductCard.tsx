import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";
import { Product } from "../../ProductInterface";
import { Button } from "@mui/material";
import { style } from "@mui/system";

interface Props {
  product: Product;
}

function AdminProductCard(props: Props) {
  return (
    <div style={cardContainer}>
      <div style={cardHeader}>
        <div style={headerText}>
          <div>{props.product.name}</div>
          <div style={priceStyle}>
            Price:
            <FontAwesomeIcon icon={faCoins} style={coinIconStyle} />
            {props.product.price}
          </div>
          <div>{props.product.categories}</div>
        </div>
      </div>
      <div>
        <img style={cardPicture} src={props.product.imageURL} alt="" />
      </div>
      <div style={itemDescription}>{props.product.description}</div>
      <Button
        // onClick={() => openEditNftModal(nft, collection.id, collection)}
        variant="contained"
        href=""
      >
        Edit NFT
      </Button>
    </div>
  );
}

export default AdminProductCard;

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
  margin: "1rem",
};
const cardPicture: CSSProperties = {
  width: "10rem",
};

const priceStyle: CSSProperties = {
  fontSize: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const coinIconStyle: CSSProperties = {
  paddingRight: ".3rem",
  paddingLeft: ".3rem",
};

const itemDescription: CSSProperties = {
  fontSize: ".9rem",
  width: "80%",
  textAlign: "center",
};

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
  margin: "1rem",
  justifyContent: "center",
};

const headerText: CSSProperties = {
  textAlign: "center",
  fontSize: "1.5rem",
};