import { addFavorito, deleteFavoritos, getTodosFavoritos } from "../services/favoritosService.js";

class FavoritosController {
  static async listarFavoritos(req, res, next) {
    try {
      const favoritos = await getTodosFavoritos();
      if (favoritos.length === 0) {
        return res.status(200).json({message: "Não há dados registrados"});
      }
      res.status(200).json(favoritos);
    } catch (erro) {
      next(erro);
    }
  }

  static async adicionarFavorito(req, res, next) {
    const id = req.params.id;
    try {
      await addFavorito(id);
      res.status(201).json({message: "Livro adicionado como favorito!"});
    } catch (erro) {
      next(erro);
    }
  }

  static async removerFavorito(req, res, next){
    const id = req.params.id;
    try {
      await deleteFavoritos(id);
      res.status(200).json({message: "Livro favorito removido com sucesso!"});
    } catch (erro) {
      next(erro);
    }
  }

}

export default FavoritosController;