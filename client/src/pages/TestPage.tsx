import { useProducts } from "../components/context/ProductContext";

function StartPage() {
  const { products, fetchProductsFromDb } = useProducts();

  const logProducts = () => {
    console.log(products);
  };

  return (
    <div>
      <div>
        <h2>Hej hej</h2>
        <button onClick={fetchProductsFromDb}>Hämta producter</button>
        <button onClick={logProducts}>Logga producter</button>
      </div>
    </div>
  );
}

export default StartPage;
