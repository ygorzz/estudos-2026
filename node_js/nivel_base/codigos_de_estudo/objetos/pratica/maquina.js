const maquina = {
  nome: 'Esteira Transportadora',
  funcionando: true,
  exibirStatus: function (){
    if(this.funcionando === true){
        console.log(`A ${this.nome} está funcionando.`)
    } else if (this.funcionando === false){
        console.log(`A ${this.nome} está parada.`)
    } else {
        console.log('Ocorreu um erro')
    }
}
};

maquina.exibirStatus();