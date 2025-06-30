import React from 'react';
import './Home.css'; // Still reusing the same styles

function About() {
  return (
    <div className="home">
      <h1>About Happy Helpings</h1>
      <p>
        Happy Helpings is a cozy home bakery where every bite feels like a warm hug. We specialize in comfort food, handmade with care — from gooey cinnamon rolls to savory quiches and corndogs with a twist. Our goal is simple: bring joy to your table with food that feels like home.
      </p>
      <div className="menu-grid">
        <div className="menu-item">
          <img src="/images/cinnamon-roll.jpg" alt="Cinnamon Roll" />
          <p className="menu-description">Our signature gooey cinnamon rolls, made with brown sugar and love.</p>
        </div>
        <div className="menu-item">
          <img src="/images/mini-quiche.jpg" alt="Mini Quiche" />
          <p className="menu-description">Fresh-baked mini quiches filled with seasonal vegetables and cheese.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
