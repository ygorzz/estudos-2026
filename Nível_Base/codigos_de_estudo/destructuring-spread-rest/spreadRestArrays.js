// USAR A NOTAÇÃO DE COLCHETES [] -> ARRAY

const numbers1 = [1, 2, 3, 4, 5]
const numbers2 = [ 6, 7, 8, 9, 10]

// SPREAD OPERATOR
// -> Espalha/Clona o array
const clone = [...numbers1]
console.log('Clone:', clone)

// Mesclando arrays
const merge = [...numbers1, ...numbers2]
console.log('Merge:',merge)


// REST OPERATOR
// -> Separa uma prop das outras
const [primeiro, ...rest] = clone
console.log(primeiro)