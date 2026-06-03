import { filterTaskByStatus } from "../helpers.js";
import { list } from "../storage.js";

export default async function listTasksDone(){
  const tasks = await list();
  const filteredTasks = filterTaskByStatus(tasks, "done");
  return filteredTasks;
}