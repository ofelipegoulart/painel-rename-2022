import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Sobre from './views/Sobre';
import Pesquisar from './views/Pesquisar';
import Header from './components/Header';
import Legenda from './views/Legenda';


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route path="sobre" element={<Sobre />} />
        <Route path="pesquisar" element={<Pesquisar />} />
        <Route path="legenda" element={<Legenda />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App