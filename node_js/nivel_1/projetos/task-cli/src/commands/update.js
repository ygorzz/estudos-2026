import listaTarefas from "./list.js";
import {add} from "../storage.js";

export default async function atualizaTarefa(id, descricao){
  const date = new Date().toLocaleString();
  const tarefas = await listaTarefas();
  const index = tarefas.findIndex(tarefa => tarefa.id === Number(id));
  tarefas[index].description = descricao;
  tarefas[index].updatedAt = date;
  await add(tarefas, id);
}