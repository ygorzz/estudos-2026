import { assembleObjectTask, verifyIfJsonIsCreated } from "../helpers.js";
import listTasks from "./list.js";
import { filePath, add } from "../storage.js";

export default async function addTask(description) {
  await verifyIfJsonIsCreated(filePath);
  const tasks = await listTasks();
  const task = assembleObjectTask(description, tasks);
  const id = task.id;
  tasks.push(task);
  await add(tasks, id);  
  console.log("Task added successfully (ID:)", id);
}
