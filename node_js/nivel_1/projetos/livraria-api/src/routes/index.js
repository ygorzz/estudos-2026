// Arquivo que funciona como ponto de entrada. Organiza e centraliza todas as rotas da aplicação.

import express from "express";
import livros from "./livroRoutes.js";
import autores from "./autorRoutes.js";
import manipuladorDeErros from "../middlewares/manipuladorDeErros.js";
import manipulador404 from "../middlewares/manipulador404.js";

// Função para agrupar e centralizar todas as rotas
const routes = (app) => {
  // Add um middleware 
  app.use(express.json());
  // .route -> permite agrupar várias ações para a mesma rota (.get().post().put()...)
  app.route("/").get((req, res) => res.status(200).send("Primeira rota da API."));

  // Pluga todas as rotas de livros dentro de app
  app.use(livros, autores);

  // Middleware para rota não encontrada
  app.use(manipulador404);

  // Middleware  para tratamewnto de erros
  app.use(manipuladorDeErros);
};
  
export default routes;

// express.json() -. // Middleware para transformar o body de requests de JSON para objeto JavaScript e permitir que o Express manipule.
// Usado para dados enviados do cliente para o servidor - a requisição deve ter body (POST, PUT, PATCH...)