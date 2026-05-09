import listaTarefas from "./list.js";
import { add } from "../storage.js";


export default async function removeTarefa(id){
  const tarefas = await listaTarefas();
  const listaAtualizada = tarefas.filter(tarefa => tarefa.id !== Number(id)); // remove a tarefa desejada do array 
  await add(listaAtualizada, id);
}