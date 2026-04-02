// adicione ao obj um método para calcular a idade da pessoa e retornar o valor no terminal como string.

const user = {
    nome: 'Roberta R',
    nascimento: '1996-05-02',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

// Apesar do JS conseguir fazer a conersão de string para number, não é interessante delegar isso para ele
user.calcularIdade = function calcularIdade(){
    const anoNasc = parseInt(this.nascimento.slice(0, 4))
    const anos = new Date().getFullYear() - anoNasc

    console.log(`A idade é ${anos} anos.`)
}

user.calcularIdade()