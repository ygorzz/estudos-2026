const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

// Filtra maiores de idade
const liberados = participantes.filter(participante => participante.idade >= 18);

// Exibe os nomes dos maiores de idade
liberados.forEach(liberado => console.log(`Acesso liberado ${liberado.nome}`));

// Cria array apenas com os nomes dos liberados
const nomesLiberados = liberados.map(liberado => liberado.nome);
console.log(`Lista final dos liberados: ${nomesLiberados}`);

