import {createInterface} from 'readline'
import {soma, subtracao, divisao, multiplicacao} from './operacoes.js'   

const rl = createInterface({
    input: process.stdin, 
    output: process.stdout
})

rl.question('Digite o primeiro número:\n> ', num1 => {
    rl.question('Digite a operação desejada:\n+) soma\n-) subtração\n/) divisão\n*) multiplicação\n> ', operador => {
        rl.question('Digite o segundo número:\n> ', num2 => {
            
            // Formatar os número de string para number
            num1 = Number(num1)
            num2 = Number(num2)

            let resultado = null

            if(operador === '+'){
                resultado = soma(num1, num2)
            } else if (operador == '-'){
                resultado = subtracao(num1, num2)
            } else if (operador == '/'){
                resultado = divisao(num1, num2)
            } else if (operador == '*'){
                resultado = multiplicacao(num1, num2)
            } else {
                console.log('Operação inválida!')
            }

            if(resultado != null){
                console.log('O resultado dessa operação é:', resultado)
            }

            rl.close()
        })
    })
})