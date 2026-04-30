export default class User {

    // Encapsulamento: Atributos privados:
    // Fora do construtor, identificamos os atributos privados que queremos ENCAPSULAR, ou seja, que só podem ser acessados dentro da classe.
    #nome
    #email
    #role
    #ativo

    // Define os parâmetros que podem ser passados
    constructor(nome, email, role, ativo = true){
        // Crias as propriedades da classe
        // # -> encapsula as props, declara as propriedades como privadas
        this.#nome = nome;
        this.#email = email;
        this.#role = role || "estudante";
        this.#ativo = ativo;
    }

    // Encapsulamento - Getters:
    // -> são métodos acessores que permitem o acesso a propriedades específicas pelo código fora da classe.
    // É uma boa prática mesmo com props não encapsuladas, pois facilita controle e manutenção do código.
    get nome(){
        return this.#nome;
    }

    get email(){
        return this.#email;
    }

    // Encapsulamento - Setters
    // permite alterar propriedades pelo código fora da classe
    set nome(novoNome){
        this.#nome = novoNome;
    }

    set ativo(novoAtivo){
        this.#ativo = novoAtivo;
    }

    // Encapsulamento - Método privado:
    #montaObjeto(){
        return {
            nome: this.#nome,
            email: this.#email,
            role: this.#role,
            ativo: this.#ativo
        }
    }

    exibirInfos(){
        // Acessando o método privado para exibir seu retorno
        const obj = this.#montaObjeto();
        return `${obj.nome}, ${obj.email}`;
    }

    // Métodos estáticos -> Porem ser executados através da própria classe, não dependem de uma instâ   ncia.
    static exibeNome(){
        return `${arguments[0]} - tipo do parâmetro: ${typeof(arguments[0])}`; // arguments -> equivalente ao argv em C.
    }
}
// Cria uma instância da classe User
const novoUser = new User('piupiu', 'piu@piu.com');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// Usado para verificar se é uma classe é protótipo de um objeto ou não -> true/false
// console.log(User.prototype.isPrototypeOf(novoUser));