import { CSSProperties, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { Product } from "../ProductInterface";

function CategoryPages() {
  const params = useParams<{ category: string }>();
  const [productList, setProductList] = useState<Product[]>([]);

  let categoryDescription = "";

  const setCategeoryDescription = () => {
    if (params.category === "MeinerNFT") {
      categoryDescription =
        "In the wonderful world of fitness, Meiner rules the squatrack. With his godly physique and incredible mindset he has become an inspiration for the rest of us. This is a collection of some of his greatest moments.";
    }
    if (params.category === "BakkumNFT") {
      categoryDescription =
        "Felix Bakkum the champion of VS-Code & guardian of Excet. With his tall and beautiful posture he looks down on all of us. Keeping us safe on the dance floor and helping us create code-magic. Get your hands on one of his NFT to secure your wealth for generations to come.";
    }
    if (params.category === "PappaNFT") {
      categoryDescription =
        "Pappa, the old and wise. An old soul in a young mans body, this man will fulfill your every wish.";
    }
    if (params.category === "Formula1NFT") {
      categoryDescription =
        "In the wonderful world of Formula One lives the Formula One car. This is a collection of some of the most beautiful racing cars on earth.";
    }
    if (params.category === "DCNFT") {
      categoryDescription =
        "DC superheroes. Could it get any better? We think not.";
    }
    if (params.category === "NoccoNFT") {
      categoryDescription =
        "Nocco, the web developers elixir of life. Coffee? Tea? Its 2022 my friend, we only drink overpriced and overcaffinated drinks now.";
    }
  };

  setCategeoryDescription();

  useEffect(() => {
    // setProductList([]);
    const fetchData = async () => {
      let response = await fetch(`/api/product/category/${params.category}`);
      setProductList(await response.json());
    };
    fetchData();
  }, [params]);

  return (
    <div style={rootStyle}>
      <div style={categoryDescriptionStyle}>
        <div style={categoryNameContainerStyle}>
          <h1 style={categoryNameStyle}>{params.category}</h1>
        </div>
        <div style={descriptionStyle}>
          <h2 style={categoryDescriptionStyle}>{categoryDescription}</h2>
        </div>
      </div>
      <div style={itemContainer}>
        {productList.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPages;

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  width: "100%",
  // border: "2px solid #88D9E6",
};

const itemContainer: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

const categoryDescriptionStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "80%",
};

const categoryNameContainerStyle: CSSProperties = { textAlign: "center" };

const categoryNameStyle: CSSProperties = { fontSize: "3rem" };

const descriptionStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "80%",
  gap: "2rem",
  flexWrap: "wrap",
  textAlign: "center",
};
