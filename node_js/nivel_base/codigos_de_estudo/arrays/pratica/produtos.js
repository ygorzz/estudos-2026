// Acessando props dentro de um array de objetos e manipulando-as

const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

console.log('\nRealtório de produtos vendidos: \n');
exibirProdutos(produtos);
console.log('\nProdutos com alto volume de vendas ( > 100 unidades: \n');
exibirMaisVendidos(produtos);
console.log('\nTotal de vendas produto: \n');
exibirTotalVendas(produtos);

// Exibe infos de cada produto
function exibirProdutos(lista){
    lista.forEach(item => {
        console.log(`Produto: ${item.nome} | Preço: ${item.preco} | Quantidade vendida: ${item.quantidadeVendida}`);
    })
}

function exibirMaisVendidos(lista){
    // Filtar os mais vendidos e mapeia apenas os nomes
    const maisVendidos = lista.filter(item => item.quantidadeVendida > 100).map(item => item.nome);
    maisVendidos.forEach(item => {
        console.log(item);
    })
}

// Exibe total de vendas
function exibirTotalVendas(lista){
    lista.forEach(item => {
        console.log(`${item.nome}: R$ ${item.preco * item.quantidadeVendida}`);
    })
}