// Arquivo que funciona como ponto de entrada. Organiza e centraliza todas as rotas da aplicação.

import express from 'express';
import livros from './livroRoutes.js';
import autores from './autorRoutes.js';

// Função para agrupar e centralizar todas as rotas
const routes = (app) => {
    // .route -> permite agrupar várias ações para a mesma rota (.get().post().put()...)
    app.route("/").get((req, res) => res.status(200).send('Primeira rota da API.'))

    // Add um middleware e pluga todas as rotas de livros dentro de app
    app.use(express.json(), livros, autores);
}

export default routes;

// express.json() -. // Middleware para transformar o body de requests de JSON para objeto JavaScript e permitir que o Express manipule.
 // Usado para dados enviados do cliente para o servidor - a requisição deve ter body (POST, PUT, PATCH...)