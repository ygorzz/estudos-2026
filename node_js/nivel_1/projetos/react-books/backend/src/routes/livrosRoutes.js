import express from "express";
import LivrosController from "../controllers/LivrosController.js";

const routes = express.Router();

routes
  .get("/", (req, res) => res.status(200).send("Primeira rota"))
  .get("/livros", LivrosController.listarLivros)
  .get("/livros/:id", LivrosController.listarLivroPorId)
  .post("/livros", LivrosController.adicionarLivro)
  .patch("/livros/:id", LivrosController.atualizaLivros)
  .delete("/livros/:id", LivrosController.removerLivro);


export default routes;