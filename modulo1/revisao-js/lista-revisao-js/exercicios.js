// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


//EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
   
}
retornaTamanhoArray()
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const reverse = array.reverse()
  return reverse
}
retornaArrayInvertido()
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const ordem = array.sort((x, y)=> x-y) 
  return ordem
}
retornaArrayInvertido()
//EXERCÍCIO 04
function retornaNumerosPares(array) {
const nPares = x => x % 2===0
const pares = array.filter(nPares)
return pares
}
retornaNumerosPares()
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
let nPares = []
for (let num of array){ 
    if(num % 2 === 0){
        num = num * num
        nPares.push(num)
    }
} return nPares
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const nOrdem = array.sort((x, y)=> x-y)
    return array.pop(nOrdem)
    
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
}