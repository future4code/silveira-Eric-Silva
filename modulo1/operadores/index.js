//1-
 //a. pergunte a idade do usuário
const idade = Number(prompt("Digite sua idade aqui:"))
console.log("Sua Idade", idade)

// b. pergunte a idade do melhor amigo ou amiga do usuário
const idadeDoAmigo = Number(prompt ("Digite a idade do seu melhor amigo(a) aqui"))
console.log("Idade do seu melhor amigo(a)", idadeDoAmigo)

//c. Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true ou false)
console.log("Sua idade é maior que a do seu amigo?",idade>idadeDoAmigo)

//d. Imprima na console a diferença de idade (não tem problema se sair um número negativo)

console.log("A diferença entre minha idade e a idade do meu amigo é de ", idade - idadeDoAmigo, "anos" )

//2-Faça um programa que:
//a) Peça ao usuário que insira um número par
const par = Number(prompt("Digite um número par:"));
//b) Imprima na console o resto da divisão desse número por 2.
console.log("O resto da divisão desse número por 2 é:", par % 2);
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//sim, os números pares sempre dão o valor de zero
//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
//dá o valor de 1

///3-Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
let idadeAnos = Number(prompt("Digite sua idade aqui:"))
const meses = 12 
const dias = 365
const horas = 24
let idadeMeses = meses * idadeAnos
let idadeDias = idadeAnos * dias 
let idadeHoras = horas * dias * idadeAnos

console.log("Sua idade é:", idadeAnos, "anos")
console.log("Sua idade em meses é de", idadeMeses, "meses")
console.log("Sua idade em dias é de ", idadeMeses, "dias")
console.log("Sua idade em horas é de aproximadamente", idadeHoras,"horas")

//4-Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:

let numero1 = Number(prompt("Digite um número:"))
console.log("Número 1", numero1)

let numero2 = Number(prompt("Digite outro número:"))
console.log("Número 2", numero2)

console.log("O primeiro número é maior que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 === numero2)
console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2)==0
console.log("O segundo número é divisível pelo primeiro?", numero2/numero1)==0

