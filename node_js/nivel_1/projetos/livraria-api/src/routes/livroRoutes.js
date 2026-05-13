import express from "express";
import montarConsulta from "../middlewares/montarConsultaLivros.js";
import paginar from "../middlewares/paginar.js";
import LivroController from "../controllers/livroController.js"; // Necessário a importação do controller

// Método do express para trabalhar com rotas. Mais recursos.
const routes = express.Router();

// Quando a request é feita, req e res são passados como argumento para listaLivros automaticamente
// : -> cria um parâmetro variável para a rota. é fixo na rota
routes
  .get("/livros", montarConsulta, paginar, LivroController.listarLivros)
  .get("/livros/:id", LivroController.buscarLivroPorId)
  .post("/livros", LivroController.adicionarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.removerLivro);

export default routes;