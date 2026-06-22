import fs from "fs";
import path from "path";

// Torna caminho compatível com diferentes SOs 
const filePath = path.resolve("./livros.json");

async function findAll() {
  const livros = await fs.promises.readFile(filePath, "utf-8");
  return JSON.parse(livros);
}

async function findById(id) {
  const livros = await findAll();
  const livro = livros.find(livro => livro.id === id);
  return livro;
}

async function save(livros) {
  await fs.promises.writeFile(filePath, JSON.stringify(livros, null, 2));
}


export { findAll, findById, save };