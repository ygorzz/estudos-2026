import Erro404 from "../errors/Erro404.js";
import * as FavoritosRepository from "../repositories/favoritosRepository.js";
import * as LivrosRepository from "../repositories/livroRepository.js";

async function getTodosFavoritos() {
  const favoritos = await FavoritosRepository.findAll();
  if (favoritos.length === 0) return [];
  return favoritos;
}

async function addFavorito(id) {
  const livros = await LivrosRepository.findAll();
  const index = livros.findIndex(livro => livro.id === id); 
  if(index === -1){
    throw new Erro404();
  }
  livros[index].favorito = true;
  await LivrosRepository.save(livros);
}

async function deleteFavoritos(id) {
  const livros = await LivrosRepository.findAll();
  const index = livros.findIndex(livro => livro.id === id);
  if (index === -1) {
    throw new Erro404();
  }
  livros[index].favorito = false;
  await LivrosRepository.save(livros);
}

export { getTodosFavoritos, addFavorito, deleteFavoritos };