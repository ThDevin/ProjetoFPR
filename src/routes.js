import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import BuscarPersonagens from "./pages/PaginaDePersonagem";

export default function Rotas() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/personagens" element={<BuscarPersonagens />} />
      </Routes>
    </BrowserRouter>
  );
}
