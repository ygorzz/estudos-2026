import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import Erro404 from "../erros/Erro404.js";

// eslint-disable-next-line no-unused-vars
export default function manipuladorDeErros(erro, req, res, next) {
  // CastError -> Nesse caso queremos verificar se o dado enviado pela req (id), pode ser convertido para um ObjectId.
  if (erro instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResposta(res);
  } else if(erro instanceof mongoose.Error.ValidationError){
    new ErroValidacao(erro).enviarResposta(res);
  } else if(erro instanceof Erro404){
    erro.enviarResposta(res);
  } else {
    console.log(erro);
    new ErroBase().enviarResposta(res);   
  }
}