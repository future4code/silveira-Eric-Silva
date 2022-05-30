// Exercício 2

const operacao = process.argv[2];
const numero1 = +process.argv[3];
const numero2 = +process.argv[4];

switch(operacao){
    case "add":
        console.log(`Resposta: ${numero1 + numero2}`);
        break
    case"sub":
        console.log(`Resposta: ${numero1 - numero2}`);
        break
    case"mult":
        console.log(`Resposta: ${numero1 * numero2}`);
        break
    case"div":
        console.log(`Resposta: ${numero1 / numero2}`);
        break
}








