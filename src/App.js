
import React from 'react';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Product from './pages/products';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
  </Router>
  );
};




export default App;
