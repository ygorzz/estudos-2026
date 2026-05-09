import ErroBase from "./ErroBase.js";

export default class RequisicaoIncorreta extends ErroBase{
  constructor(){
    // São esse dois parâmetros que passamos para o construtor da superclasse
    super("Um ou mais dados enviados estão incorretos", 400);
  }
}