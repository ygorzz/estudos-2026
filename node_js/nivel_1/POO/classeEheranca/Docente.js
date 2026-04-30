import User from "./User.js";

export default class Docente extends User {
    // Define quais propriedades serão herdadas da super classe. Nessecaso, todas.
    constructor(nome, email, role = 'docente', ativo = true){
        // Define que toda a lógica de manipulação dessa proprieades também vão ser herdadas da super classe;
        super(nome, email, role, ativo);
    }

    aprovarAluno(aluno, curso){
        return `Aluno ${aluno} aprovado no curso de ${curso}. Responsável: ${this.nome}`;
    }
}

const novoDocente = new Docente('Freeza', 'kuririn@morreu.com');
// console.log(novoDocente);
// console.log(novoDocente.aprovarAluno('kuririn', 'espaçonave'));