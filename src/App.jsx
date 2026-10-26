
import { useState } from "react";
import ProductForm from "./Component/ProductForm";
import ProductList from "./Component/ProductList";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((previousProducts) => [
      ...previousProducts,
      product,
    ]);
  };

  return (
    <div className="app">
      <h1>Product Management System</h1>

      <ProductForm onAddProduct={addProduct} />

      <ProductList products={products} />
    </div>
  );
}

export default App;
