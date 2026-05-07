// Gerenciar as ações possíveis desse model 
// Necessário a importação do model

import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";
import Erro404 from "../erros/Erro404.js";

// Classes sempre começam com maiúsculas
class LivroController {

  // !!! Sempre que estiver retornando dados, usamos .json
  // !!! Se estiver retornando um texto/html/arquivo usamos .send

  // static -> permite usar o método sem precisar instanciar a classe (new Classe)
  static async listarLivros(req, res, next) {
    // verifica se há parametros de busca
    const editora = req.query.editora;
    const filtro = editora ? {editora} : {};

    try {
      const listaLivros = await livro.find(filtro);
      // Tratamento de casos onde não há dados correspondentes com a busca
      if(listaLivros.length > 0){
        res.status(200).json(listaLivros);
      } else if (editora){
        next(new Erro404("Não foram localizados livros com essa editora"));
      } else {
        next(new Erro404("Não há livros cadastrados"));
      }
    } catch (error) {
      // next -> encaminha o erro para o próximo middleware com 4 parãmetros, o middleware de tratamento de erros
      next(error);
    }
  };

  static async buscarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livroBuscado = await livro.findById(id);
      if (livroBuscado !== null) {
        res.status(200).json({ message: "Livro encontrado!", livro: livroBuscado });
      } else {
        next(new Erro404("Id do livro não localizado"));
      }
    } catch (error) {
      // next -> encaminha o erro para o middleware de tratamento de erros
      next(error);
    }
  };

  static async adicionarLivro(req, res, next) {
    // Vem com o id do autor na prop 'autor' e os outros dados do livro
    const novoLivro = req.body;
    try {
      // Busca o objeto interiio do autor pelo id
      const autorEncontrado = await autor.findById(novoLivro.autor);
      if(autorEncontrado !== null){
        // Usa o spread operator para copiar os dados do livro e alterar a prop 'autor' para o objeto autor completo
        // ._doc -> envia apenas os dados puros e não o documento completo do mongoose(métodos internos , metadados...)
        const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
        await livro.create(livroCompleto);
        // 201 -. server criou um novo recurso
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
      const livroAtualizado = await livro.findByIdAndUpdate(id, req.body, { new: true });
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
      const livroDeletado = await livro.findByIdAndDelete(id);
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

export default LivroController;