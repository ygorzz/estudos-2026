import { list } from "../storage.js";

export default async function listaTarefas(){
  return await list();
}