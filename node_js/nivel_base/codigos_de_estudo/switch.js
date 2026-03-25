let nota = 7

switch(nota){
    case 10:
    case 9:
        console.log('Excelente');
        break
    case 8:
    case 7:
        console.log('Boa');
        break
    case 6:
    case 5:
    case 4:
        console.log('Meadiana')
        break
    case 3:
    case 2:
    case 1:
    case 0: 
        console.log('Ruim')
        break
    default: // padrão, caso nenhum case seja atendido 
        break    
}