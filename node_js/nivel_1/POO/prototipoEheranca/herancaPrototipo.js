const user = {
    nome: "Ygor",
    idade: 18,
    role: "player",
    exibirInfos: function() {
        console.log(this.nome, this.idade, this.role);
    }
};

const admin = {
    nome: "Jurema",
    idade: 20,
    role: "admin",
    criarCurso: function (){
        console.log('curso criado.')
    }
};

// 'admin' herda as informações de 'user'
// setPrototypeOf(quem vai herdar, quem vai ser o protótipo)
Object.setPrototypeOf(admin, user);
admin.exibirInfos();
// Ordem de execução: 
// - setPrototypeOf cria um link de conexão, admin não é sobrescrito
// - quando for chamada alguma prop que vem do protótipo:
    // programa tenta executar, não consegue
    // ent procura se há alguma conexão com algum prototipo
    // encontra
    // executa
