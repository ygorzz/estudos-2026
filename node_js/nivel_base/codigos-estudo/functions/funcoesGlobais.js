
function saudacao() {
    console.log("Olá!")
}
// SETTIMEOUT
// Realizar alguma ação (função) após determinado perído de tempo em milissegundos
setTimeout(saudacao, 6000)

// SETINTERVAL
// Repete uma ação (função) a cada período de tempo passado como argumento
// Retorna um id quando chamada -> usado para o clearInterval
let contador = 0
const id = setInterval( () => {
    contador++
    console.log('Tempo:', contador)
    if (contador == 5){
        clearInterval(id)
    }
}, 1000)