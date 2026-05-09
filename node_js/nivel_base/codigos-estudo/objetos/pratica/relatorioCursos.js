// Exibindo relatório de cada objeto dentro o array e uma relaçao entre eles.

const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "Ana", progresso: 85 },
    { nome: "Carlos", progresso: 40 },
    { nome: "Juliana", progresso: 72 },
    { nome: "Pedro", progresso: 60 }
  ],
  gerarRelatorio: function () {
    let qtdEstudantes = 0;
    let totalProgresso = 0;
    this.estudantes.forEach(estudante => {
        qtdEstudantes++;
        totalProgresso += estudante.progresso
        const situacao = estudante.progresso >= 70 ? 'Aprovado' : 'Em andamento';
        console.log(`Estudante: ${estudante.nome} | Progresso: ${estudante.progresso} | Situação: ${situacao}`);
    })
    console.log(`\nTotal de estudantes: ${qtdEstudantes}`);
    console.log(`Média geral da turma: ${totalProgresso / qtdEstudantes}`)
  } 
};

curso.gerarRelatorio();