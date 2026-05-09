import User from './User.js';

// extends -> classe Admin vai herdar dados da classe User
export default class Admin extends User {
    // Inicializa a subclasse com as props que ela precisa, se for uma prop que vem da superclasse devemos passar dentro de super()
    constructor(nome, email, role = 'admin', ativo = true){
        // super -> passa os parãmetros para o construtor da superclasse ser executado corretamente. 
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

