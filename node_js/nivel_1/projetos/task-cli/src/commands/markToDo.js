import Error404 from "../error/Error404.js";
import { findIndex, verifyIndex } from "../helpers.js";
import { add, list } from "../storage.js";

export default async function markToDo(id){
  const date = new Date().toLocaleString();
  const tasks = await list();
  const index = findIndex(tasks, id);
  if(!verifyIndex(index)){
    throw new Error404();
  }
  tasks[index].status = "todo";
  tasks[index].updatedAt = date;
  await add(tasks, id);
}