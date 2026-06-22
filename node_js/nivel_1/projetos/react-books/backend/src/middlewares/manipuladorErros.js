import ErroBase from "../errors/ErroBase.js";

// eslint-disable-next-line no-unused-vars
function manipuladorErros(erro, req, res, next){
  if(erro instanceof ErroBase){
    erro.sendAnswer(res);
  } else {
    console.log(erro);
    new ErroBase().sendAnswer(res);
  }
}

export default manipuladorErros;