const deepArray = [[1, 2], 3, 4]

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