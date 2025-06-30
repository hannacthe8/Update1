import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './pages/Home';
import Specials from './pages/Specials';
import About from './pages/About';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
