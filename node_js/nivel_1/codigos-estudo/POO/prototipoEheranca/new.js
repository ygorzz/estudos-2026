// Função Construtora
// -> desde a implementação da sintaxe de classe, as funções construtoras não são mais tão utilizadas.
function User(nome, email){
    this.nome = nome;
    this.email = email;
    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`;
    }
}

// new -> usado para criar instâncias de um novo objeto a partir de um função construtora.
const novoUser = new User('Charmander', 'char@c.com');
console.log(novoUser.exibirInfos());
