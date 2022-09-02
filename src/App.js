import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Sobre from './views/Sobre';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route path="sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App