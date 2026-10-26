
import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || price === "" || quantity === "") {
      alert("Please fill all fields");
      return;
    }

    if (Number(price) <= 0 || Number(quantity) <= 0) {
      alert("Price and quantity must be greater than 0");
      return;
    }

    const product = {
      id: Date.now(),
      name: name.trim(),
      price: Number(price),
      quantity: Number(quantity),
    };

    onAddProduct(product);

    setName("");
    setPrice("");
    setQuantity("");
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Add New Product</h2>

      <label>Product Name</label>
      <input
        type="text"
        placeholder="Enter product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>Price (₹)</label>
      <input
        type="number"
        placeholder="Enter price"
        min="0.01"
        step="0.01"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <label>Quantity</label>
      <input
        type="number"
        placeholder="Enter quantity"
        min="1"
        step="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
