import Erro404 from "../erros/Erro404.js";

function manipulador404(req, res, next){
  const erro404 = new Erro404();
  // No Express, qualquer parâmetro passado para um next() é entendido como um erro. Por isso é encaminhado diretamente para o middleware de tratamento de erros.
  next(erro404);
}

export default manipulador404;