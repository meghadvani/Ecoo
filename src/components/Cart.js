import React from 'react';

function Cart({ cart }) {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <div>
          {cart.map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
