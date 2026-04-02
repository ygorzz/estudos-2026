// Acessadno e alterando valores eu um array

const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];

const segundoItem = listaDeCompras[1]
const ultimoItem = listaDeCompras.length - 1
listaDeCompras[ultimoItem] = 'alface'

console.log(`Seguno item da lista: ${segundoItem}`)
console.log(`Lista alterada: ${listaDeCompras}`)