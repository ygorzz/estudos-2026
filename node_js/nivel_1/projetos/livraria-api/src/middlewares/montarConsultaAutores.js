import { autores } from "../models/index.js";

export default function montarConsulta(req, res, next){

  try {
    // Cria uma query, mas sem o await, não a executa. Armazena a query no objeto req.
    const buscaAutores = autores.find({});
    req.consulta = buscaAutores;    
    next(); // passa a req para o próximo middleware (paginar)
  } catch (error) {
    // next -> encaminha o erro para o próximo middleware com 4 parâmetros, o middleware de tratamento de erros
    next(error);
  }

}
