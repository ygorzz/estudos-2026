// Criar um novo objeto Date - esse objeto vem com várias propriedades para manipulá-lo
const data = new Date()

// -> retorna data em string - FORMATO ISO 8601
console.log('Data atual:', data) 

// Pegar o ano da data:
console.log(`Ano: ${data.getFullYear()}`)

// Mês 0-11: -> retorna a posição do mês no array de meses 
console.log('Mês 0-11:', data.getMonth())

// Dia:
console.log('Dia:', data.getDate())

// Hora: 
console.log('Hora:', data.getHours())

// Minutos:
console.log('Minutos:', data.getMinutes())

// Especificando data:
const nascimento  = new Date('2007-08-31:12:45:00Z') // Z -> tempo universal
console.log('Nascimento:', nascimento)

// Formatando data do formato ISO 8601 para uma localidade específica: toLocaleDateString()
console.log('Formato BR:', nascimento.toLocaleDateString('pt-BR'))


