const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço';

const busca = livros.indexOf(livroProcurado);

const resultado = busca === -1 ? 'Livro não encontrado' : 'Livro encontrado!';

console.log(resultado); 