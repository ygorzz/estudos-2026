const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem-vindo(a) ao Quiz sobre o Brasil!');
console.log('Responda com a letra correta: a, b ou c\n');

setTimeout(createQuiz, 1000)

let acertos = 0;
function createQuiz() {
    rl.question('Qual a capital do Brasil? \n (a) Rio de Janeiro \n (b) São Paulo \n (c) Brasília \n -> ', (resposta) => {
        if (resposta.toLowerCase() == 'c') {
            acertos++
        }

        rl.question('\nQuem é o atual presidente do Brasil? \n (a) Lula \n (b) Bolsonaro \n (c) Ana Castela \n -> ', (resposta) => {
            if (resposta.toLowerCase() == 'a') {
                acertos++
            }

            rl.question('\nQuantas regiões há no Brasil? \n (a) 5 \n (b) 7 \n (c) 4 \n -> ', (resposta) => {
                if (resposta.toLowerCase() == 'a') {
                    acertos++
                }

                rl.close()

                if (acertos == 3) {
                    console.log('\nParabéns, você gabaritou!\n')
                } else {
                    console.log(`\nVocê obteve ${acertos} acertos\n`)
                }

            })
        })
    })


}

