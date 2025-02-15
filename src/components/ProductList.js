import React from 'react';
import Product from './Product';

const products = [
  { id: 1, name: 'Mama Earth Sunscreen', price: 10, image: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1089463/h0CN40m7F6-8906087778288_01.jpg' },
  { id: 2, name: 'Mama Earth Sunscreen', price: 20, image: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1089463/h0CN40m7F6-8906087778288_01.jpg' },
  { id: 3, name: 'Mama Earth Sunscreen', price: 30, image: 'https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1089463/h0CN40m7F6-8906087778288_01.jpg' }
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
