// Exercício 1

// a) O typescript não vai aceitar, a menos que o valor "number" seja atribuído ao invés ou use o "|" para utilizar os 2 tipos.
// b) Teriamos que usar o "|" para aceitar os dois tipos de valores.

enum corFavorita{
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome:string,
    idade:number,
    corFavorita:string
}
const pessoa1:Pessoa={
    nome:"Eric Felipe",
    idade: 19,
    corFavorita: corFavorita.ANIL
}
const pessoa2:Pessoa={
    nome:"Davi",
    idade: 22,
    corFavorita: corFavorita.LARANJA
}
const pessoa3: Pessoa={
    nome:"Luian",
    idade:23,   
    corFavorita: corFavorita.VERDE 
}

console.log(pessoa1)