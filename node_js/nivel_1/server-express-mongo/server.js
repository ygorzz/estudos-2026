// Lib nativa do node para trabalhar com http request -> oferece menos recursos
// import http from 'http';
import 'dotenv/config' // inicia o dotenv na aplicação
import app from './src/app.js';

const PORT = 3000;

// CRIANDO E INICIANDO UM SERVER COM EXPRESS:
app.listen(PORT, () => {
    console.log('Aguardando uma requisição...');
});
    











// GERENCIANDO ROTAS SEM O EXPRESS:
// const rotas = {
//     "/": "Curso Back-end com Node.js", 
//     "/chaplau": "fiz um chaplau" 
// }

// CRIANDO O SERVER COM A LIB HTTP:
// writeHead() -> define o header da req ou res
// -> o header contém informações da req ou res (método, protocolo, status, host, client, data, tipo do conteúdo, encode...)
// res.end() -> finaliza a resposta http
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"content-type": "text/plain"}); // text/plain -> texto simples
//     res.end(rotas[req.url]); // envia uma resposta de acordo com a rota acessada
//     console.log('recebi uma requisição');
// });

// INICIANDO O SERVER NA PORTA 3000 E FICA ESPERANDO POR UMA REQUISIÇÃO COM A LIB HTTP:
// server.listen(PORT, () => {
//     console.log('esperando por uma requisição...');
// });


