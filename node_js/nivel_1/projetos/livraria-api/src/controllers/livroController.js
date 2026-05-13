// Gerenciar as ações possíveis desse model 
// Necessário a importação do model

import { livros } from "../models/index.js";
import { autores } from "../models/index.js";
import Erro404 from "../erros/Erro404.js";
import encaminhaErros404 from "../helpers/encaminhaErros404.js";

// Classes sempre começam com maiúsculas
class LivroController {

  // !!! Sempre que estiver retornando dados, usamos .json
  // !!! Se estiver retornando um texto/html/arquivo usamos .send

  // static -> permite usar o método sem precisar instanciar a classe (new Classe)
  static listarLivros(req, res, next) {
    try {
      const resultado = req.resultadoPaginado;

      // Tratamento de casos onde não há dados correspondentes com a busca
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        encaminhaErros404("livros", req.buscasFeitas, next);
      }

    } catch (erro) {
      next(erro);
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
      if (autorEncontrado !== null) {
        // Usa o spread operator
        // ._doc -> envia apenas os dados puros e não o documento completo do mongoose(métodos internos , metadados...)
        const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
        await livros.create(livroCompleto);
        // 201 -> server criou um novo recurso
        res.status(201).json({ message: "Livro cadastrado com sucesso", livro: livroCompleto });
      } else {
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
      if (livroAtualizado !== null) {
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
      if (livroDeletado !== null) {
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