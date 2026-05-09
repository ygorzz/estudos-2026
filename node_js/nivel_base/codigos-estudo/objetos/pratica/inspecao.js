// Exibe um relatório das infos do objeto. Acesso de chaves e valores do objetos com métodos
const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
};

const categorias = Object.keys(relatorio)
const valores = Object.values(relatorio)

console.log(`\nCategorias avaliadas: ${categorias}`)
console.log(`Valores registrados: ${valores}`)
console.log('\nDetalhamento:')

for(const medida in relatorio){
    const msg = relatorio[medida] > 50 ? 'alerta' : 'ok'
    console.log(`${medida}: ${relatorio[medida]} (${msg}) `)
}