import React from 'react';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import Introduce from './components/Introduce/Introduce';
import About from './components/About/About';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Introduce />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
