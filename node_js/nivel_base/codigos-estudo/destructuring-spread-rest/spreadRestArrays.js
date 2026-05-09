// USAR A NOTAÇÃO DE COLCHETES [] -> ARRAY

import { deprecate } from "node:util"

const numbers1 = [1, 2, 3, 4, 5]
const numbers2 = [ 6, 7, 8, 9, 10]
const deepArray = [[1, 2], 3, 4]

// SPREAD OPERATOR - cópia rasa, não copia arrays aninhados
// -> Espalha/Clona o array
const clone = [...numbers1]
console.log('Clone:', clone)

// DEEP COPY - cópia profunda
const clonarArray = (arr) => {
    const copia = []
    arr.forEach(elem => {
        // Verifica se elemento é um array
        if(Array.isArray(elem)){
             copia.push(clonarArray(elem))
        } else {
            copia.push(elem)
        }
    })

    return copia
}

const arr2 = clonarArray(deepArray)
deepArray[0][0] = 7
console.log(arr2)
console.log(deepArray)

// Mesclando arrays
const merge = [...numbers1, ...numbers2]
console.log('Merge:',merge)

// REST OPERATOR
// -> Separa uma prop das outras
const [primeiro, ...rest] = clone
console.log(primeiro)