import express from 'express';
import livrosController from '../controllers/livrosController.js';

const routes = express.Router();

routes
    .get("/", (req, res) => res.status(200).send("Primeira rota"))
    .get("/livros", livrosController.listarLivros)
    .get("/livros/:id", livrosController.listarLivrosPorId)
    .post("/livros", livrosController.adicionarLivro)
    .patch("/livros/:id", livrosController.atualizaLivros)
    .delete("/livros/:id", livrosController.removerLivro)


export default routes;