// Arquivo para manipular a lib fs
import fs from "fs";
import path from "path";

// path.resolve -> normaliza o caminho para ser compatível com diferentes SOs 
export const filePath = path.resolve("./tasks.json");

// Aqui não é necessário try/catch, pq como queremos apenas lançar o erro para trataErros.js, por padrão, se houver um erro, já sobe na call stack.
// eslint-disable-next-line no-unused-vars
export async function add(task, id){
  await fs.promises.writeFile(filePath, JSON.stringify(task, null, 2));   
}

export async function list(){
  const tasksList = await fs.promises.readFile(filePath, "utf-8");
  return JSON.parse(tasksList);  
}
