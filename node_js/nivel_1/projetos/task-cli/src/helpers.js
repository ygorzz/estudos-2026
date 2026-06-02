import fs from "fs";

export function montaObjetoTarefa(descricao, listaTarefas){
  const date = new Date().toLocaleString();
  const ultimoId = listaTarefas.length > 0 ? listaTarefas[listaTarefas.length - 1].id : 0;
  return ({
    id: ultimoId + 1,
    description: descricao,
    status: "todo", 
    createdAt: date,
    updatedAt: ""
  });
} 

export async function verificaSeJsonEstaCriado(filePath){
  if(!fs.existsSync(filePath)) await fs.promises.writeFile(filePath, JSON.stringify([]));
}
