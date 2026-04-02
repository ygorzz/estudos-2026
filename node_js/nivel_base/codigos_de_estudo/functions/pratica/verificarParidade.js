const verificarParidade = (num) => {
    if(num % 2 === 0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

console.log(verificarParidade(46))