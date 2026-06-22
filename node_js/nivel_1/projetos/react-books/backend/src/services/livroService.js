import Erro404 from "../errors/Erro404.js";
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js";
import gerarId from "../helpers/gerarId.js";
import * as LivroRepository from "../repositories/livroRepository.js";

async function getTodosLivros() {
  const livros = await LivroRepository.findAll();
  if (livros.length === 0) return [];
  return livros;
}

async function getLivroPorId(id) {
  const livro = await LivroRepository.findById(id);
  if(!livro){
    throw new Erro404();
  }
  return livro;
}

async function addLivro(livro) {
  if (!livro.titulo || !livro.autor) {
    throw new RequisicaoIncorreta("Título e Autor do livro são obrigatórios");
  }
  const id = gerarId();
  livro.id = id;
  livro.favorito = false;
  const livrosAtuais = await LivroRepository.findAll();
  livrosAtuais.push(livro);
  await LivroRepository.save(livrosAtuais);
}

async function updateLivros(id, atualizacao) {
  const campos = Object.keys(atualizacao);
  if (campos.length === 0) {
    throw new RequisicaoIncorreta("É necessário ao menos um campo a ser atualizado");
  }
  const livros = await LivroRepository.findAll();
  const index = livros.findIndex(livro => livro.id === id);
  if (index === -1) {
    throw new Erro404();
  }
  const livroAtualizado = { ...livros[index], ...atualizacao };
  livros[index] = livroAtualizado;
  await LivroRepository.save(livros);
}

async function deleteLivros(id) {
  const livros = await LivroRepository.findAll();
  const index = livros.findIndex(livro => livro.id === id);
  if (index === -1) {
    throw new Erro404();
  }
  const novosLivros = livros.filter(livro => livro.id !== id);
  await LivroRepository.save(novosLivros);
}

export { getTodosLivros, getLivroPorId, addLivro, updateLivros, deleteLivros };