// Quando herdamos de Error, transformamos nossa classe ErroBase sintaticamente em um erro do JS
export default class ErroBase extends Error{
  constructor(mensagem = "Erro interno do servidor", status = 500){
    super();
    this.mensagem = mensagem;
    this.status = status;
  }

  enviarResposta(res){
    res.status(this.status).json({
      message: this.mensagem,
      status: this.status
    });
  }
}