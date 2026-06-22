import fs from "fs";
import path from "path";

// Torna caminho compatível com diferentes SOs 
const filePath = path.resolve("./livros.json");

async function findAll() {
  const data = await fs.promises.readFile(filePath, "utf-8");
  const livros = JSON.parse(data);
  const favoritos = livros.filter(livro => livro.favorito);
  return favoritos;
}

export { findAll };