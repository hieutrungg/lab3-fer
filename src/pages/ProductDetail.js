import React from "react";
import { useParams, Link } from "react-router-dom";
import { Products } from "../data/Product";
function ProductDetail() {
  const { id } = useParams();
  const product = Products.find((product) => product.id === Number(id));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>Product detail</h1>
      <nav>
        <Link to="/">Home</Link> |<Link to="/products">Product List</Link> |
        <Link to="/about">About</Link> |
      </nav>

      <ul>
        <div>
          {Products.filter((product) => product.id === parseInt(id)).map(
            (product) => (
              <div key={product.id}>
                <h2>{product.name}</h2>
                
                <p>ID: {id}</p>
                <p>Danh mục: {product.category}</p>
                <p>Giá: {product.price}đ</p>
                <p>Mô tả: {product.description}</p>
              </div>
            ),
          )}
        </div>
      </ul>
      <Link to="/products">Back to Product List</Link>
    </div>
  );
}

export default ProductDetail;
