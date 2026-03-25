// HOF = Higher-Order Function -> função que recebe outra função como parâmetro
// Callback -> função que é passada como paâmetro para outra função

// calcular é a HOF
function calcular(num1, num2, operacao) {
    return operacao(num1, num2)
}

// soma é o callback
function soma(num1, num2) {
    return num1 + num2
}

calcular(num1, num2, soma)