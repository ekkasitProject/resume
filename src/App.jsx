import React from 'react';
import Navbar from './components/Navbar/Navbar';

import './App.css';
import Introduce from './components/Introduce/Introduce';
import About from './components/About/About';
const App = () => {
  return (
    <>
      <Navbar />
      <Introduce />
      <About />
    </>
  );
};

export default App;
