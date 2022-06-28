// 1)
// a)Um construtor serve para instanciar objetos da classe na qual esse construtor foi definido. "constructor(){}"
// b)Uma vez
// c)utilizamos algum método do getters

type Transaction = {
  description: string;
  value: number;
  date: string;
};

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getCpf(): string {
    return this.cpf;
  }
  public getName(): string {
    return this.name;
  }
  public getAge(): number {
    return this.age;
  }
  public getBalance(): number {
    return this.balance;
  }
  public getTransactions(): Transaction[] {
    return this.transactions;
  }
}
const user = new UserAccount("23872938067", "Eric Felipe", 19);
console.log(user);

class transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    console.log("Chamando o construtor da classe transaction");
    this.description = description;
    this.value = value;
    this.date = date;
  }
  public getDescription(): string {
    return this.description;
  }
  public getValue(): number {
    return this.value;
  }
  public getDate(): string {
    return this.date;
  }
}

const trans = new transaction("testedotesteteste", 500, "maisumtestedoteste");
console.log(trans);
class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }
  public setAccounts(newAccount: UserAccount): void {
    this.accounts.push(newAccount);
  }
  public getAccounts(): UserAccount[] {
    return this.accounts;
  }
}
