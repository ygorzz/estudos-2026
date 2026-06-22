import axios from "axios"; // Lib para requisições para o servidor

const livroAPI = axios.create({ baseURL: "http://localhost:8000/livros" });

async function getLivros(){
  const response = await livroAPI.get("/");
  return response.data || []; // Se não houver livros retornados do server, envia um array vazio para o client
}

async function deleteLivros(id){
  const response = await livroAPI.delete(`${id}`);
  // O Axios já converte para objeto javascript automaticamente
  return response.data;
}

async function insertLivros({ titulo, autor }){
  const response = await livroAPI.post("/", { titulo, autor }); // O segundo argumento do post é o corpo da requisição
  return response.data;
  ;}

async function updateLivros(id, { titulo, autor }) {
  const response = await livroAPI.patch(`${id}`, { titulo, autor });
  return response.data;
}

export {
  getLivros,
  deleteLivros,
  insertLivros,
  updateLivros,
};