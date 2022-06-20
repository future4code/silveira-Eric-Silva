// 1)
// a)Um construtor serve para instanciar objetos da classe na qual esse construtor foi definido. "constructor(){}"
// b)Uma vez 

type Transaction = {
    description: string,
    value: number,
    date: string
  }
  
  class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }     
  }
  
const eric = new UserAccount("23872938067","Eric Felipe", 19)