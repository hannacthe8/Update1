import React, { useState } from 'react';
import './Home.css'; // Reusing shared styles

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      name: 'Cinnamon Roll',
      quantity: 2,
      price: 3.5,
      image: '/images/cinnamon-roll.jpg'
    },
    {
      name: '8\" Quiche',
      quantity: 1,
      price: 12.0,
      image: '/images/quiche.jpg'
    }
  ]);

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const submitOrder = () => {
    const message = cartItems
      .map(item => `${item.quantity} x ${item.name} ($${item.price})`)
      .join('%0A');
    const total = getTotal();
    const mailtoLink = `mailto:hannac@the8camerons.ca?subject=New Order&body=${message}%0A%0ATotal: $${total}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="home">
      <h1>Your Cart</h1>
      <div className="menu-grid">
        {cartItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="menu-description">Quantity: {item.quantity}</p>
            <p className="menu-description">Price: ${item.price.toFixed(2)}</p>
            <button onClick={() => removeItem(index)}>Remove</button>
          </div>
        ))}
      </div>

      {cartItems.length > 0 ? (
        <>
          <h2>Total: ${getTotal()}</h2>
          <button onClick={submitOrder} style={{ backgroundColor: '#8B5E3C', fontSize: '1.2rem', marginTop: '1rem' }}>
            Submit Order
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
