// Alterando valores com map
const precos = [100, 80, 50, 120];

const precosComDesconto = precos.map(preco => preco - (preco * 10 / 100)); // ou preco * 0.9 = 10% de desconto

console.log(precosComDesconto);