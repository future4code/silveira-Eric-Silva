//1- O resultado será um looping infinito
//2- 
//a. Serão impresssos no consoles valores
//do array que maiores que 18
//b. Sim
//3- Irá imprimir 4 linhas no console

//exercício 1-
const nomeDosPets = []

let numBixos = Number(prompt("Quantos bichinhos de estimação que você tem?"))
     if (numBixos === 0){
         console.log("Que pena! Você pode adotar um pet!")

     }else if(numBixos> 0){
         let i = 0
         while(i < numBixos){
             nomeDosPets.push(prompt("Digite o nome do seus pets:"))
             i++;
         }
         console.log(nomeDosPets)
     }

//exercicio 2-
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let numero of arrayOriginal) {
    if(numero > 0) {
    console.log(numero)
    }
    }

    const arrayOriginal2 = (numero) 
        for (let numero of arrayOriginal2) {
            if (numero / 10){
                console.log(numero)
            }
        }    
    