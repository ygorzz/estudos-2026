import livros from "../models/index.js";

export default function montarConsulta(req, res, next){
  const busca = processaBusca(req.query);
  req.buscasFeitas = busca; 
  try {
    // Cria uma query, mas sem o await, não a executa. Armazena a query no objeto req.
    const buscaLivros = livros.find(busca);
    req.consulta = buscaLivros;
    next(); // passa a req para o próximo middleware (paginar)
  } catch (error) {
    // next -> encaminha o erro para o próximo middleware com 4 parâmetros, o middleware de tratamento de erros
    next(error);
  }
}

// FUNÇÃO AUXILIAR:

function processaBusca(parametros){
  // verifica se há parametros de busca
  const {editora, titulo, minPaginas, maxPaginas, autor} = parametros;
  // regex para verificar se o titulo do livro contém a busca feita / i -> case insensitive
  // Modo nativo do JS;
  // const regex =  new RegExp(titulo, "i");
  const busca = {};
  if(editora) busca.editora = editora;
  if(titulo) busca.titulo = {$regex: titulo, $options: "i"}; // operador nativo do mongodb 
  if(minPaginas || maxPaginas){
    busca.paginas = {};
    if(minPaginas) busca.paginas.$gte = minPaginas;
    if(maxPaginas) busca.paginas.$lte = maxPaginas;
  }
  // Quando passamos as props aninhadas em uma string, o MongoDB interpreta como campos aninhados em um objeto na hora de executar a query
  if(autor) busca["autor.nome"] = autor;

  return busca;
}
