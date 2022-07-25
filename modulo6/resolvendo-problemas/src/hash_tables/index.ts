// interface Personagem {
//    name: string,
//    cartoon: string,
//    phrase?: string
// }

interface Personagem {
   [key: string]: any
}

const homer: Personagem = {
   name: "Homer Simpson",
   cartoon: "The Simpsons",
}

homer.phrase = "Moe, me vê mais uma Duff Beer!"
homer.age = 23

console.table(homer);