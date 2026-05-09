// Em comparações desse padrão, o JS trata as variáveis como true se possuir um valor e false se estiver vazia ou com um desse valores atribuídos: false, 0, "", null, undefined, NaN (Not a Number)

let nome = ''
let numero = null


if (nome){
    console.log(nome)
} else {
    console.log('Sem nome')
}

if (numero){
    console.log(numero)
} else {
    console.log('Sem numero')
}