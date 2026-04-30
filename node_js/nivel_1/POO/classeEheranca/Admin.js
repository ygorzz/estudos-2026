import User from './User.js';

// extends -> classe Admin vai herdar dados da classe User
export default class Admin extends User {
    // Define quais propriedades herdará. Nesse caso, todas. Os métodos são herdados automaticamente.
    constructor(nome, email, role = 'admin', ativo = true){
        // super -> define que toda a lógica de manipulação dessas propriedades também será herdada da Super Classe(nesse caso: User). 
        super(nome, email, role, ativo);
    }

    // Polimorfismo: method overriding
    exibirInfos(){
        const infos = super.exibirInfos() // consome o método da super classe
        return `admin - ${infos}`;
    }

    criarCurso(nomeCurso, qtdVagas){
        return `Curso ${nomeCurso} criado com ${qtdVagas} vagas.`
    }

}

// const novoAdmin = new Admin('naruto', 'n@n.com');
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.criarCurso('Informática', 28));

