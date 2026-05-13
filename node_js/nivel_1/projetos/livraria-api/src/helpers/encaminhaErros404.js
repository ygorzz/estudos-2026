import Erro404 from "../erros/Erro404.js";

export default function encaminhaErros404(model, consulta, next) {

  if(model === "livros"){
    if(consulta.pagina){
      next(new Erro404("Limite de páginas excedido"));
    } else if (consulta.editora && consulta.titulo) {
      next(new Erro404("Não foram localizados livros com esse titulo e essa editora"));
    } else if (consulta.editora) {
      next(new Erro404("Não foram localizados livros com essa editora"));
    } else if (consulta.titulo) {
      next(new Erro404("Não foram localizados livros com esse título"));
    } else if (consulta.minPaginas || consulta.maxPaginas) {
      next(new Erro404("Não foram localizados livros com o limite de páginas informado"));
    } else if (consulta.autor) {
      next(new Erro404("Não foram localizados livros referentes a esse autor"));
    } else {
      next(new Erro404("Não há livros cadastrados"));
    }
  }

  if(model === "autores"){
    if(consulta.pagina){
      next(new Erro404("Limite de páginas excedido"));
    }
  }
}