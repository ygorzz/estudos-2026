import Erro404 from "../erros/Erro404.js";
import encaminhaErros404 from "../helpers/encaminhaErros404.js";
import { autores } from "../models/index.js";

class AutorController {

  static async listarAutores(req, res, next) {
    try {
      const resultado = req.resultadoPaginado;
      const busca = req.buscasFeitas || {};
      const total = await autores.countDocuments(busca);

      if (total === 0) {
        next(new Erro404("Não há autores cadastrados"));
      }
      if (resultado.length > 0) {
        res.status(200).json({ autores: resultado });
      } else {
        encaminhaErros404("autores", busca, next);
      }
    } catch (error) {
      next(error);
    }
  }

  static async buscarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      const autorBuscado = await autores.findById(id);
      if(autorBuscado !== null){
        res.status(200).json({ message: "Autor encontrado", autor: autorBuscado });
      } else {
        next(new Erro404("Id do autor não localizado"));
      }
    } catch (error) {
      next(error);
    }
  };

  static async adicionarAutor(req, res, next) {
    try {
      const autorAdicionado = await autores.create(req.body);
      res.status(201).json({ message: "Autor adicionado", autor: autorAdicionado });
    } catch (error) {
      next(error);
    }
  };

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      // {new: true} -> faz com que findByIdAndUpdate retorne os dados atualizados e não os antigos
      const autorAtualizado = await autores.findByIdAndUpdate(id, req.body, { new: true });
      if(autorAtualizado !== null){
        res.status(200).json({ message: "Autor atualizado", autor: autorAtualizado });
      } else {
        next(new Erro404("Id do autor não localizado"));
      }
    } catch (error) {
      next(error);
    }
  };

  static async removerAutor(req, res, next) {
    try {
      const id = req.params.id;
      const autorRemovido = await autores.findByIdAndDelete(id);
      if(autorRemovido !== null){
        res.status(200).json({ message: "Autor removido", autor: autorRemovido });
      } else {
        next(new Erro404("Id do autor não localizado"));
      }
    } catch (error) {
      next(error);
    }
  };

}

export default AutorController;