const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

let mesesManutencao = 0;
let diasManutencao = 0;

for(const mes in manutencao){
    diasManutencao += manutencao[mes];
    if(manutencao[mes] > 0) mesesManutencao++;
}

console.log(`Total de dias parados: ${diasManutencao}`)
console.log(`Meses com manutenção registrada: ${mesesManutencao}`)
diasManutencao > 20 ? console.log('Status: Atenção! Acima do limite anual.') : console.log('Status: Dentro do limite anual.')