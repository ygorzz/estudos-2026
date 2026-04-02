const despesas = [120, 80, 45.5, 200, 60];

let soma = 0; 
despesas.forEach(despesa => {
    soma += despesa
})

console.log(`Total ${soma}`)