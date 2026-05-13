import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";

async function paginar(req, res, next) {

  try {
    let { limite = 5, pagina = 1, ordenacao = "_id:-1" } = req.query;
    let { campoOrdenacao, ordem } = processaOrdenacao(ordenacao);

    limite = parseInt(limite);
    pagina = parseInt(pagina);
    ordem = parseInt(ordem);     

    if (limite <= 0 || pagina <= 0) next(new RequisicaoIncorreta());

    req.buscasFeitas = req.buscasFeitas || {};
    req.buscasFeitas.pagina = pagina; // Add pagina para encaminhar erro 404 (listaLivros) caso a pagina exceda o limite.
    const consulta = req.consulta; // Armazena a query a ser feita

    const resultadoPaginado = await consulta // Executa a query
      .sort({ [campoOrdenacao]: ordem })
      .skip((pagina - 1) * limite)
      .limit(limite);

    req.resultadoPaginado = resultadoPaginado;
        
    next();
  } catch (erro) {
    next(erro);
  }
  
}

function processaOrdenacao(ordenacao){
  const parametrosOrdenacao = {};
  const [campo, ordem] = ordenacao.split(":");
  parametrosOrdenacao.campoOrdenacao = campo;
  parametrosOrdenacao.ordem = ordem;
  return parametrosOrdenacao;
}

export default paginar;