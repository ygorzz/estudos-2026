// Este arquivo é um roteador -> possui middlewares para detrminadas rotas e métodos http.

import express from "express";
import AutorController from "../controllers/autorController.js";
import paginar from "../middlewares/paginar.js";
import montarConsulta from "../middlewares/montarConsultaAutores.js";

const routes = express.Router();

// Todos os métodos de um Controller são middlewares
routes
  .get("/autores", montarConsulta, paginar, AutorController.listarAutores)
  .get("/autores/:id", AutorController.buscarAutorPorId)
  .post("/autores", AutorController.adicionarAutor)
  .put("/autores/:id", AutorController.atualizarAutor)
  .delete("/autores/:id", AutorController.removerAutor);

export default routes;