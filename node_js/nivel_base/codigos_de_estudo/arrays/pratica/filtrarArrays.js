// filtrar um array e alterar valores específicos
// ex: alterar números para strings

const cpfs = ['12323434545', '34658756786', 43254365434, '76547865345', 56768767564];

const result = cpfs.map(cpf => typeof cpf === 'string' ? cpf : cpf.toString())

console.log(cpfs)
console.log(result)