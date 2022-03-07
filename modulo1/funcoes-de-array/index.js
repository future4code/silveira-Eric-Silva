//1- a)irá imprimir um array com informações separadas individualmente
//2- b)o valor dos nomes impressoes no array serão impressos no console
//3- c) as informações do usuário "Chijo"

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
//  const novoAray1 = pets.map ((item, index, array) => {
//      return item.nome   
//  })
// console.log(novoAray1)

// const salsicha = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
//  const novoAray2 = salsicha.filter ((item, index, array) => {
//      return item.raca === "Salsicha"   
//  })
// console.log(novoAray2)

// const poodle = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
//  const novoAray3 = poodle.filter ((item) => {  
//     return item.raca === "Poodle"  
//  })
//     console.log(novoAray3)
//     const novoAray4 = novoAray3.map ((item) =>{
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`

//     })

//     console.log(novoAray4)

//2 a)
 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//  const nomeProdutos = produtos.map((item) => {
//     return item.nome
//  })
//  console.log(nomeProdutos)

// //b)
//  const nomeProdutosb = produtos.map((item) => {
//     const divisao = {nome: item.nome, preco: item.preco * 0.95}
//     return divisao
 
//  })
//  console.log(nomeProdutosb)

 //c) 
//  const bebidas = produtos.filter((item) => {
//    return item.categoria === "Bebidas"
       
//  })
// console.log(bebidas)

// const ype = produtos.filter((item) => {
//    return item.nome.includes("Ypê")

// })
// console.log(ype)

const comprePor = produtos.filter((item) =>{
   if (item.nome.includes("Ypê")){
      console.log(`Compre ${item.nome} por ${item.preco}`)
   } 

})
 

 