// Esse exercíco reforça a boa prática de responsabilidade única para uma função

const nomeAparelho = 'Geladeira'
const consumo = calcularConsumo(150, 4)
const classificacao = classificarConsumo(consumo)
const resumo = exibirResumo(nomeAparelho, consumo, classificacao)

console.log(resumo)

function calcularConsumo(potencia, horasPorDia){
    return (potencia * horasPorDia * 30) / 1000
}

function classificarConsumo(consumo){
    if(consumo < 50 ){
        return 'Baixo consumo'
    } else if( consumo < 200 ){
        return 'Consumo moderado'
    } else {
        return 'Alto consumo'
    }
}

function exibirResumo(nomeAparelho, consumo, classificacao){
    return `${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificado como ${classificacao}`
}