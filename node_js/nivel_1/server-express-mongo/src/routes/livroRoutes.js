import express from 'express';
import LivroController from '../controllers/livroController.js'; // Necessário a importação do controller

// Método do express para trabalhar com rotas. Mais recursos.
const routes = express.Router();

// Quando a request é feita, req e res são passados como argumento para listaLivros automaticamente
// : -> cria um parâmetro variável para a rota. é fixo na rota
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/busca", LivroController.buscarLivroPorEditora);
routes.get("/livros/:id", LivroController.buscarLivroPorId);
routes.post("/livros", LivroController.adicionarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.removerLivro);

export default routes;