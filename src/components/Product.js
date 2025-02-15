import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
