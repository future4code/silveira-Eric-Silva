import { Client } from "../Interface/Client";
import { Commerce } from "./Commerce";


export class CommercialClient extends Commerce implements Client {
    constructor(
        private cnpj:string,
        public name:string,
        public registrationNumber:number,
        public consumedEnergy: number,
        residentsQuantity: number,
        cep: string
    ){
        super(residentsQuantity, cep)
    }    
        public getCnpj():string{
            return this.cnpj
        }
        public calculateBill(): number {
            return this.consumedEnergy *0.53
        }
}