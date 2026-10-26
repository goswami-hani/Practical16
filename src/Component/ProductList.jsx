
function ProductList({ products }) {
  return (
    <div className="product-list">
      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>₹{product.price.toFixed(2)}</td>
                <td>{product.quantity}</td>
                <td>
                  ₹{(product.price * product.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;
