import express from "express";
import FavoritosController from "../controllers/FavoritosController.js";

const routes = express.Router();

routes
  .get("/favoritos", FavoritosController.listarFavoritos)
  .post("/favoritos/:id", FavoritosController.adicionarFavorito)
  .delete("/favoritos/:id", FavoritosController.removerFavorito);

export default routes;