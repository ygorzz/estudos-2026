export default function trataErros(erro){
    if(erro.code === 'ENOENT') {
        // Cria um novo objeto Error, geralmente usamos quando identificamos um possível erro que pode ocorrer na lógica por exemplo, erro esse que não e nativo.
        throw new Error('Arquivo não encontrado.')
    } else {
        return 'Erro na aplicação.';
    }
}
