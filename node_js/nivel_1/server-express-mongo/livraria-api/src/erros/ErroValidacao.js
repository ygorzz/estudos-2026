import ErroBase from "./ErroBase.js";

class ErroValidacao extends ErroBase{
  constructor(erro){
    super("Os seguintes erros foram encontrados: ", 400);
    this.erro = erro;
  }

  mensagemErro(){
    return Object.values(this.erro.errors) // retorna os valores de cada erro que são um objeto com a prop message
      .map(erro => erro.message) // de cada objeto retornado, retorna apenas a message
      .join("; "); // une as messages de erros em uma unica string
  }

  enviarResposta(res){
    res.status(this.status).json({
      message: `${this.mensagem} ${this.mensagemErro()}`,
      status: 400 
    });
  }
}

export default ErroValidacao;