import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SesionPage from "../pages/Session"
import Home from "../pages/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SesionPage/>} Redirect to="/Sesion"/>
        <Route path="/Inicio" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;