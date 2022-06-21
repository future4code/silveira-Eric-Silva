
export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    public introduceYourself: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string,
          introduceYourself:string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
          this.introduceYourself = introduceYourself 
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
      public getIntroduceYourself():string{
        return `Olá, sou ${this.name}. Bom dia!`;
      }
  }

