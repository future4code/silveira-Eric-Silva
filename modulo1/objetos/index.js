/*1-
console 1 = Matheus Nachtergaele
console 2 = 4 
console 3 = globo

2-
a. console 1 - nome, idade e raça do cachorro
   console 2 - o mesmo de cachorro so que vai substituir o nome 
   console 3 - o mesmo de gato mas vai substituir "a" vogal a do nome do gato pela vogal "o" 
b. repete o objeto cujo a cons é citado

3- 
a. quando o console for rodar vai invocar a minhaFunao, a funão vai revisar o que está no objeto pessoa e ver se a propiedade "backender" existe, como existe retorna o valor dela ao console.
b. vai fazer a mesma coisa que anterior, só que vai dar undefined. Já que não está definida.*/

//1-

const pessoa = {
nome: "Eric Felipe",
apelidos: ["Exterminador"," Cabeção", " Fumabare"]
}
function Objeto(objeto) { 
console.log(`Eu sou ${objeto.nome}, mas pode me chamar de ${objeto.apelidos}`)
}
//b.
const apelido2 = {...pessoa, apelidos:[" Arroz"," Telefone" ," Mouse"] }
console.log("atualizacaoDeApelido", apelido2)

Objeto(apelido2)
//2-
 
const objeto1 = {
nome: "Gabriela",
idade: 24,
profissao: "Professora"

}
const objeto2 = {...objeto1, nome:"José", idade:30, profissao:"Barbeiro"}

function imprimirObjetos(parametro) {
const lista = [parametro.nome, parametro.nome.length, parametro.idade, parametro.profissao, parametro.profissao.length]
return lista
}
console.log(imprimirObjetos(objeto1))

const carrinho = []

const sacolao1 ={ 
nome: "Maracujá",
disponibilidade: true
}

const sacolao2 ={ 
nome: "Morango",
disponibilidade: true
}

const sacolao3 ={ 
nome: "Uva",
disponibilidade: true
}

function frutaParametro(outrasFrutas){
carrinho.push(outrasFrutas)    
}
frutaParametro(sacolao1)
frutaParametro(sacolao2)
frutaParametro(sacolao3)
console.log(carrinho)




