//2-Leia o código abaixo com atenção
//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//Os valores das letas digitas em minúsculo que tem o valor de "A" serão trocados por "I".


//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:    
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
/*const nomeDousuario = prompt("Qual seu nome?")
const emaiDoUsuario = prompt("Qual seu endereço e-mail?")
const fraseConcat = (`O e-mail ${emaiDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDousuario}!`)

console.log(fraseConcat)*/

/*2.2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
a) Imprima no console o array completo
b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista.*/

/*
const comidasPreferidas=['Hamburger', 'Pizza', 'Pastel', 'Feijoada','Churrasco']


//console.log("Essas são as minhas comidas preferidas:")
//console.log(comidasFavoritas,length)
 
const qualSuaComidaPreferida = prompt("Qual a sua comida preferida?")


console.log(comidasPreferidas.splice(2,1))/*

console.log(comidasPreferidas.splice(2,1))


/*a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
c) Imprima o array no console
d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array no consol*/


const listaDeTarefas = ["estudar", "comer", "dormir"]
listaDeTarefas.splice(0, 2)

const tresTarefas = prompt("Fale três tarefas que você precise realizar hoje")
tresTarefas.push(3)

console.log(listaDeTarefas)




/*let listaDeTarefas = []  
const tamanhoLista = listaDeTarefas

//listaDeTarefas.push(3)

const li = prompt("Diga 3 tarefas que você tem que realizar hoje?")
function minhaFuncao(variavel) {return variavel * 5}
console.log(minhaFuncao(2))
console.log(minhaFuncao(10))*/





