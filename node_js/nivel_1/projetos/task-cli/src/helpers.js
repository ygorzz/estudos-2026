import fs from "fs";

export function assembleObjectTask(description, tasksList){
  const date = new Date().toLocaleString();
  const lastId = tasksList.length > 0 ? tasksList[tasksList.length - 1].id : 0;
  return ({
    id: lastId + 1,
    description: description,
    status: "todo", 
    createdAt: date,
    updatedAt: ""
  });
} 

export async function verifyIfJsonIsCreated(filePath){
  if(!fs.existsSync(filePath)) await fs.promises.writeFile(filePath, JSON.stringify([]));
}

export function findIndex(list, id){
  const index = list.findIndex(item => item.id === Number(id));
  return index;
}

export function verifyIndex(index){
  const result = index === -1 ? false : true;
  return result;
}

export function filterTaskByStatus(list, status){
  const filteredTasks = list.filter(item => item.status === status);
  return filteredTasks;
}