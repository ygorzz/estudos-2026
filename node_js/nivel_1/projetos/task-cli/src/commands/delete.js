import listTasks from "./list.js";
import { add } from "../storage.js";


export default async function deleteTask(id){
  const tasks = await listTasks();
  const updatedList = tasks.filter(task => task.id !== Number(id)); // remove a tarefa desejada do array 
  await add(updatedList, id);
}