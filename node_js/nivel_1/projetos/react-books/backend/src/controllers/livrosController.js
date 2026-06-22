import { getLivroPorId, getTodosLivros, addLivro, updateLivros, deleteLivros } from "../services/livroService.js";

class LivrosController {
  static async listarLivros(req, res, next) {
    try {
      const livros = await getTodosLivros();
      if (livros.length === 0) {
        return res.status(200).json({message: "Não há dados registrados"});
      }
      res.status(200).json(livros);
    } catch (erro) {
      next(erro);
    }
  }

  static async listarLivroPorId(req, res, next) {
    const id = req.params.id;
    try {
      const livroDesejado = await getLivroPorId(id);
      res.status(200).json(livroDesejado);
    } catch (erro) {
      next(erro);
    }
  }

  static async adicionarLivro(req, res, next) {
    try {
      await addLivro(req.body);
      res.status(201).json({message: "Livro adicionado com sucesso!"});
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizaLivros(req, res, next) {
    const id = req.params.id;
    const atualizacao = req.body;
    try {
      await updateLivros(id, atualizacao);
      res.status(200).json({message: "Livro atualizado com sucesso!"});
    } catch (erro) {
      next(erro);
    }
  }

  static async removerLivro(req, res, next){
    const id = req.params.id;
    try {
      await deleteLivros(id);
      res.status(200).json({message: "Livro removido com sucesso!"});
    } catch (erro) {
      next(erro);
    }
  }

}

export default LivrosController;