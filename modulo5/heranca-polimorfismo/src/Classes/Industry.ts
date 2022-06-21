import { Place } from "./Place";

export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
      
      cep: string
          ) {
          super(cep);
    }
  }