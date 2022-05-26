import { CSSProperties, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { Product } from "../ProductInterface";

function CategoryPages() {
  const params = useParams<{ category: string }>();
  const [productList, setProductList] = useState<Product[]>([]);

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
