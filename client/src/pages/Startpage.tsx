import { CSSProperties, useEffect } from "react";
import { useDelivery } from "../components/context/DeliveryOptionContext";
import { useOrder } from "../components/context/OrderContext";
import { useProducts } from "../components/context/ProductContext";
import ProductCard from "../components/ProductCard";
import { Product } from "../ProductInterface";

// import CategoryCard from "../components/CategoryCard";

function StartPage(startPageProps: any) {
  const { products, fetchProductsFromDb } = useProducts();

  useEffect(() => {
    fetchProductsFromDb();
  }, []);

  let randomList = products
    .sort(() => Math.random() - Math.random())
    .slice(0, 6);

  return (
    <div style={rootStyle}>
      <div style={contentContainer}>
        <div style={startPageWelcomeText}>
          <h2 style={startPageHeadline}>
            Buy extreme NFTs and don't look back!
          </h2>
          <p style={headlineSubText}>
            Are you looking for insane NFTs? Do you want to make money quick?
            You've come to the right place. We scoured the internet and
            handpicked the best NFTS for you! Enjoy!
          </p>
        </div>
        <div style={hottestStyle}>
          <div style={hottestTitle}>
            <h1>HOTTEST ITEMS RIGHT NOW</h1>
          </div>
          <div style={flexItems}>
            {randomList.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartPage;

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  width: "100%",
  // border: "2px solid #88D9E6",
};

const startPageHeadline: CSSProperties = {
  fontSize: "2rem",
  textAlign: "center",
  padding: "0 1rem",
};

const headlineSubText: CSSProperties = {
  maxWidth: "30rem",
  textAlign: "center",
  padding: "0 1rem",
};

const flexProducts: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  flexDirection: "row-reverse",
  justifyContent: "space-evenly",
  margin: "1rem 0",
};

const flexItems: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  margin: "1rem 1rem",
  width: "75%",
};

const startPageWelcomeText: CSSProperties = {
  maxWidth: "40rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const contentContainer: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
};

const hottestStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "2rem",
};

const hottestTitle: CSSProperties = {
  textAlign: "center",
  margin: "0 1rem",
};
