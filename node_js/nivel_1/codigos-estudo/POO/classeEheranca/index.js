import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';

const novoUser = new User('vegeta', 'v@v.com');
const novoAdmin = new Admin('naruto', 'n@n.com');
const staticMethod = User.exibeNome('ygor')

console.log(novoUser.exibirInfos())
console.log(novoAdmin.exibirInfos())
console.log(staticMethod);
novoUser.nome = 'paulo' // Alterando valor da prop com método Setter
// console.log(novoUser.nome); // Acessando o método getter 'nome'.

// Encapsulamos as props e métodos dentro de User.js e tentamos acessá-las aqui:
// Causa erro, pois #nome é uma propriedade privada
// novoUser.#nome = 'ygor';
// Nesse caso, #nome e nome são diferente, logo é criada uma nova propriedade chamada 'nome'.
// novoUser.nome = 'ygor'
