// Fazendo uma cópia do array
const pedidos = ['camiseta', 'calça', 'tênis'];

// Com spread operator:
// const copia = [...pedidos]
// copia.push('terno')

// Com forEach
const copia = []

pedidos.forEach(pedido => {
    copia.push(pedido)
})

copia.push('terno')

console.log(pedidos)
console.log(copia)