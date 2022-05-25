import { useProducts } from "../components/context/ProductContext";

function StartPage() {
  const { products, fetchProductsFromDb } = useProducts();

  const logProducts = () => {
    console.log(products);
  };

  fetchProductsFromDb();

  return (
    <div>
      <div>
        <h2>Hej hej</h2>
        <button onClick={fetchProductsFromDb}>Hämta producter</button>
        <button onClick={logProducts}>Logga producter</button>
      </div>
      <div>
        <h1>Här ska det komma produkter</h1>
        {products.map((product, index) => (
          <div key={index}>
            <h1>{product.name}</h1>
            <img src={product.imageURL} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StartPage;
