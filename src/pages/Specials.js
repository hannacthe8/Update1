import React from 'react';
import './Home.css'; // Reuse same styles as Home

const Specials = () => {
  const specials = [
    {
      name: 'Summer Berry Tart',
      price: '$6.50',
      image: '/images/berry-tart.jpg',
      description: 'A crisp tart shell filled with sweet vanilla custard and topped with fresh summer berries.'
    },
    {
      name: 'Bacon & Swiss Quiche',
      price: '$8.00',
      image: '/images/quiche.jpg',
      description: 'Savory and creamy quiche loaded with crispy bacon and Swiss cheese. A hearty classic.'
    },
    {
      name: 'Maple Pecan Brownie',
      price: '$3.75',
      image: '/images/brownie.jpg',
      description: 'Dense, fudgy brownie swirled with maple and studded with toasted pecans.'
    }
  ];

  return (
    <div className="home">
      <h1>Featured Specials</h1>
      <div className="menu-grid">
        {specials.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} />
            <button>{item.name} – {item.price}</button>
            <p className="menu-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specials;
