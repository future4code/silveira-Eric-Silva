/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
 console.log("Boas vindas ao jogo de Blackjack!")
	const cartaUsuario1 = comprarCarta() 
   const cartaUsuario2 = comprarCarta()
   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()
 if(confirm("Deseja começar o jogo?")) {
   let cartaUsuario =[cartaUsuario1, cartaUsuario2]
   let cartaComputador=[cartaComputador1, cartaComputador1]
   let somaCU = (cartaUsuario[0].valor + cartaUsuario[1].valor) 
   let somaPC = (cartaComputador[0].valor + cartaComputador[1].valor)
   let textoCU = `${cartaUsuario[0].texto} ${cartaUsuario[1].texto}`
   let textoPC = `${cartaComputador[0].texto} ${cartaComputador[1].texto}`
   console.log(`Usuário - Cartas; ${textoCU} - Pontuação;${somaCU}`)
   console.log(`Usuário - Cartas; ${textoPC} - Pontuação;${somaPC}`)
   if (somaCU > somaPC) {
      console.log("Usuário ganhou!")
   }else if (somaPC > somaCU){
      console.log("Computador ganhou!")
   }else if (somaPC === somaCU){

   }
} else {
   console.log("O jogo acabou!")
	
}