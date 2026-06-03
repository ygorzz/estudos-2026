import { list } from "../storage.js";

export default async function listTasks(){
  return await list();
}