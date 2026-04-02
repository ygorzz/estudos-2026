const participantes = [
  { nome: "Laura", pontuacao: 92 },
  { nome: "Pedro", pontuacao: 67 },
  { nome: "Clara", pontuacao: 44 }
];

realizarSorteio(participantes)

// Sorteia um valor aleatório de entre 0 e o tamanho da lista
function sortearParticipante(lista){
    const max = lista.length
    const index = Math.floor(Math.random() * max)
    // retorna o item na posição do valor gerado
    return lista[index]
}

function exibirNomeSorteado(participanteSorteado){
        console.log(`Participante Sorteado: ${participanteSorteado.nome}`)
}

function avaliarPontuação(participanteSorteado){
    const pontuacao = participanteSorteado.pontuacao

    console.log(`Pontucação: ${pontuacao}`)

    if(pontuacao > 80){
        console.log("Parabéns, você foi premiado!")
    } else if (pontuacao > 50 ){
         console.log("Você quase conseguiu! Fique de olho nos próximos sorteios.")
    } else {
        console.log("Infelizmente, não foi dessa vez.")
    }
}

function realizarSorteio(lista){
    console.log('Sorteando...')
    const participante = sortearParticipante(lista)
    // Delay de 2 segundos
    setTimeout(() => {
        exibirNomeSorteado(participante)
        avaliarPontuação(participante)
    }, 2000)
}

