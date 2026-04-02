const dispositivos = [
    {
        nome: 'Iphone',
        status: 'conectado'
    },
    {
        nome: 'Xiamoi',
        status: 'conectado'
    },
    {
        nome: 'Samsung',
        status: 'desconectado'
    }
]

dispositivos.forEach(dispositivo => {
    console.log(`Dispositivo: ${dispositivo.nome} | status: ${dispositivo.status}`);
})