import { montaObjetoTarefa, verificaSeJsonEstaCriado } from "../helpers.js";
import listTarefas from "./list.js";
import { filePath, add } from "../storage.js";

export default async function addTarefa(descricao) {
  await verificaSeJsonEstaCriado(filePath);
  const listaTarefas = await listTarefas();
  const tarefa = montaObjetoTarefa(descricao, listaTarefas);
  const id = tarefa.id;
  listaTarefas.push(tarefa);
  await add(listaTarefas, id);
  console.log("Tarefa adicionado com sucesso (ID:)", id);
}
