import { log } from "console";

const pessoa = {
    nome: "Ygor",
    idade: 18,
    sexo: "M",
    exibirInfos: function() {
        console.log(this.nome, this.idade, this.sexo);
    }
};

//pessoa.exibirInfos();

// Se chamarmos 'exibir()', retornará undefined, pois 'exibir' não tem o contexto, n tem as informações a serem exibidas. 
const exibir = pessoa.exibirInfos;
// Agr prendemos a função 'exibir' ao objeto pessoa. Dessa forma, ela recebe o contexto e passa a considerar como 'this' o objeto pessoa.
// bind() -> cria uma nova função que considerará o argumento de bind() como 'this' fixo.
const exibirInformacoes = exibir.bind(pessoa);
exibirInformacoes()
