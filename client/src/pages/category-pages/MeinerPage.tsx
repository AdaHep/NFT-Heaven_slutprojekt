import { CSSProperties, useEffect, useState } from "react";
import { useProducts } from "../../components/context/ProductContext";
import ProductCard from "../../components/ProductCard";

function StartPage(startPageProps: any) {
  const {
    products,
    categories,
    fetchCategoriesFromDb,
    fetchProductsFromDb,
    setTheSelectedCategory,
    selectedCategory,
  } = useProducts();

  // let randomList =  collections.sort(() => Math.random() - Math.random()).slice(0, 3)

  console.log(categories);
  console.log(products);

  return (
    <div style={rootStyle}>
      <div>
        <button onClick={fetchCategoriesFromDb}>
          Hämta kategorier tills ngt läckert är på plats
        </button>
        <button onClick={fetchProductsFromDb}>
          Hämta produkter tills ngt läckert är på plats
        </button>
        <button onClick={() => setTheSelectedCategory("Knulla din mor")}>
          Sätt
        </button>
        <button onClick={() => console.log(selectedCategory)}>Kuk</button>
      </div>
      <div style={itemContainer}>
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default StartPage;

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
