export default function trataErros(erro){
  if(erro.code === "ENOENT"){
    console.error("O arquivo de tarefas não existe.");
  }else{
    console.error(erro);
  }
}