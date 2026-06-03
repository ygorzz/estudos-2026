import { filterTaskByStatus } from "../helpers.js";
import { list } from "../storage.js";

export default async function listTasksToDo(){ 
  const tasks = await list();
  const filteredTasks = filterTaskByStatus(tasks, "todo");
  return filteredTasks;
}