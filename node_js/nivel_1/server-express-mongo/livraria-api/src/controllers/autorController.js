import Erro404 from "../erros/Erro404.js";
import { autor } from "../models/Autor.js";

class AutorController {

  static async listarAutores(req, res, next) {
    try {
      const listaAutores = await autor.find({});
      if(listaAutores.length > 0){
        res.status(200).json({ autores: listaAutores });
      }else{
        next(new Erro404("Não há autores cadastrados"));
      } 
    } catch (error) {
      // next -> encaminha o erro para o middleware de tratamento de erros
      next(error);
    }

  };

  static async buscarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      const autorBuscado = await autor.findById(id);
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
      const autorAdicionado = await autor.create(req.body);
      res.status(201).json({ message: "Autor adicionado", autor: autorAdicionado });
    } catch (error) {
      next(error);
    }
  };

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      // {new: true} -> faz com que findByIdAndUpdate retorne os dados atualizados e não os antigos
      const autorAtualizado = await autor.findByIdAndUpdate(id, req.body, { new: true });
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
      const autorRemovido = await autor.findByIdAndDelete(id);
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