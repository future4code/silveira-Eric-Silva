//1- Irá verificar se a informação recbida pelo prompt será igua a zero, se a resposta for true, irá aparecer no console a segunte mensagem "passou no teste", caso seja false "não passou no teste".
//2-
//a. consulta de preço dos produtos selecionados
//b. 2.25
//c. no console seria impresso o valor dos itens abaixo de pêra
//3-
//a. está pedindo ao usuário para que digite o primeiro número
//b. "essa mensagem é secreta!!!". Se o valor fosse -10 estaria como indefined pois não possui else
//c. haverá se o valor colocado pelo usuário for negativo 

//1-
function revisaoIdade(idade){
    if (idade>=18){
        console.log ('Você pode dirigir')
    }else{
        console.log (`Você não pode dirigir`)
    }
}

const idade = Number(prompt("Quantos anos você tem?"))

revisaoIdade()


//2-
function saudacao (turno){
    if (turno === "M"){
         console.log("Bom dia!")
    }else if(turno === "V"){
         console.log("Boa Tarde!")
    }else if(turno === "N"){
         console.log("Boa noite!")
    }
}
const mvn = prompt("Digite M para (matutino), V para (Vespertino) e N par (Noturno)") 
console.log(saudacao(mvn))


function saudacao2(turno) {

    switch (turno) {
        case "M":
            console.log("Bom dia!")
            break;
        case "V":
            console.log("Boa Tarde!")
            break;
        case "N":
            console.log("Boa Noite!")
            break;
        default:
            console.log("Resultado não encontrado")
    }
}
const turno = prompt("Digite M para (matutino), V para (Vespertino) e N par (Noturno)") 
saudacao2(turno)

//4-
function filme(genero, valor){ 
    if(genero === "fantasia" && valor <= 15){
         console.log(`Bom Filme!`)
    }else{
         console.log(`Escolha outro filme :(`)
    }
}
const genero = prompt("Qual o gênero do filme?")
const valor = Number(prompt("Qual o valor do filme?"))

filme()


