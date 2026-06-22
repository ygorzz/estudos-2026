import express from "express";
import livrosRoutes from "./livrosRoutes.js";
import favoritosRoutes from "./favoritosRoutes.js";
import manipuladorErros from "../middlewares/manipuladorErros.js";

function routes(app){
  app.use(express.json());
  app.use(livrosRoutes, favoritosRoutes);
  app.use(manipuladorErros);
}

export default routes;