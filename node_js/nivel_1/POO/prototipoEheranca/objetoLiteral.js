const user = {
    nome: "Ygor",
    idade: 18,
    role: "player",
    exibirInfos: function() {
        console.log(this.nome, this.idade, this.role);
    }
};

//user.exibirInfos();

// Se chamarmos 'exibir()', retornará undefined, pois 'exibir' não tem o contexto, n tem as informações a serem exibidas. 
const exibir = user.exibirInfos;
// Agr prendemos a função 'exibir' ao objeto user. Dessa forma, ela recebe o contexto e passa a considerar como 'this' o objeto user.
// bind() -> cria uma nova função que considerará o argumento de bind() como 'this' fixo.
const exibirInformacoes = exibir.bind(user);
exibirInformacoes()
