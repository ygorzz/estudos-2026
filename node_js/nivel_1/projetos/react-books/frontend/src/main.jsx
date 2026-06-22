// src/main.jsx
import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import MeusLivros from "./pages/MeusLivros";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    {/* BrowserRouter -> informa a aplicação que existirá roteamento de componentes */}
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/livros" element={<MeusLivros />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);