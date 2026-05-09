// Gerenciar as ações possíveis desse model 
// Necessário a importação do model

import { livros } from "../models/index.js";
import { autores } from "../models/index.js";
import Erro404 from "../erros/Erro404.js";

// Classes sempre começam com maiúsculas
class LivroController {

  // !!! Sempre que estiver retornando dados, usamos .json
  // !!! Se estiver retornando um texto/html/arquivo usamos .send

  // static -> permite usar o método sem precisar instanciar a classe (new Classe)
  static async listarLivros(req, res, next) {
    
    const busca = processaBusca(req.query);

    try {
      const listaLivros = await livros.find(busca);
      // Tratamento de casos onde não há dados correspondentes com a busca
      if(listaLivros.length > 0){
        res.status(200).json(listaLivros);
      } else {
        encaminhaErros(busca, next);
      }
    } catch (error) {
      // next -> encaminha o erro para o próximo middleware com 4 parãmetros, o middleware de tratamento de erros
      next(error);
    }
  };

  static async buscarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livroBuscado = await livros.findById(id);
      if (livroBuscado !== null) {
        res.status(200).json({ message: "Livro encontrado!", livro: livroBuscado });
      } else {
        next(new Erro404("Id do livro não localizado"));
      }
    } catch (error) {
      next(error);
    }
  };

  static async adicionarLivro(req, res, next) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autores.findById(novoLivro.autor);
      if(autorEncontrado !== null){
        // Usa o spread operator
        // ._doc -> envia apenas os dados puros e não o documento completo do mongoose(métodos internos , metadados...)
        const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
        await livros.create(livroCompleto);
        // 201 -> server criou um novo recurso
        res.status(201).json({ message: "Livro cadastrado com sucesso", livro: livroCompleto });
      }else{
        next(new Erro404("Autor do livro não localizado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const id = req.params.id;
      // findByIdAndUpdate -> por padrão retorna o objeto antigo encontrado por id e não os dados atualizados.
      // {new: true} -> faz com que o metodo retorne os dados atualizados.
      const livroAtualizado = await livros.findByIdAndUpdate(id, req.body, { new: true });
      if(livroAtualizado !== null){
        res.status(200).json({ message: "Livro atualizado", livro: livroAtualizado });
      } else {
        next(new Erro404("Id do livro não localizado"));
      }
    } catch (error) {
      next(error);
    }
  };

  static async removerLivro(req, res, next) {
    try {
      const id = req.params.id;
      // Retorna o objeto livro deletado
      const livroDeletado = await livros.findByIdAndDelete(id);
      if(livroDeletado !== null){
        res.status(200).json({ message: "Livro removido", livro: livroDeletado });
      } else {
        next(new Erro404("Id do livro não localizado"));
      }
    } catch (error) {
      next(error);
    }
  };

}

// FUNÇÕES AUXILIARES:

function processaBusca(parametros){
  // verifica se há parametros de busca
  const {editora, titulo, minPaginas, maxPaginas, autor} = parametros;
  // regex para verificar se o titulo do livro contém a busca feita / i -> case insensitive
  // Modo nativo do JS;
  // const regex =  new RegExp(titulo, "i");
  const busca = {};
  if(editora) busca.editora = editora;
  if(titulo) busca.titulo = {$regex: titulo, $options: "i"}; // operador nativo do mongodb 
  if(minPaginas || maxPaginas){
    busca.paginas = {};
    if(minPaginas) busca.paginas.$gte = minPaginas;
    if(maxPaginas) busca.paginas.$lte = maxPaginas;
  } 
  if(autor){
    // Quando passamos as props aninhadas em uma string, o MongoDB interpreta como campos aninhados em um objeto na hora de executar a query
    busca["autor.nome"] = autor;
  };

  return busca;
}

function encaminhaErros(busca, next){
  if (busca.editora && busca.titulo){
    next(new Erro404("Não foram localizados livros com esse titulo e essa editora"));
  } else if (busca.editora){
    next(new Erro404("Não foram localizados livros com essa editora"));
  } else if(busca.titulo){
    next(new Erro404("Não foram localizados livros com esse título"));
  } else if (busca.minPaginas || busca.maxPaginas){
    next(new Erro404("Não foram localizados livros com o limite de páginas informado"));
  } else if (busca.autor){
    next(new Erro404("Não foram localizados livros referentes a esse autor"));
  } else {
    next(new Erro404("Não há livros cadastrados"));
  }
} 

export default LivroController;