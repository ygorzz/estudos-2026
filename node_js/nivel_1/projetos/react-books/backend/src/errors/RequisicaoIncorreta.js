import ErroBase from "./ErroBase.js";

class RequisicaoIncorreta extends ErroBase{
  constructor(message, status = 400){
    super(message, status);
  }
}

export default RequisicaoIncorreta;