import ErroBase from "./ErroBase.js";

class Erro404 extends ErroBase {
  constructor(message = "Livro não encontrado", status = 404){
    super(message, status);
  }
}

export default Erro404;