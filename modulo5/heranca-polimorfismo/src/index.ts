import { User } from "./Classes/User";
import {Customer} from "./Classes/Customer"
import { Client } from "./Interface/Client";
import { Place } from "./Classes/Place";
import { Industry } from "./Classes/Industry";


// 1)
// a)não, o password não tem getters
// b)Uma vez

const user = new User("1", "ericfelipess07@gmail.com", "Eric Felipe", "ericlindo", "Olá, bom dia!") 
console.log(
    user.getId(),
    user.getName(),
    user.getEmail(),
    user.getIntroduceYourself()
    );

// 2)
// a)Uma vez
// b)Uma vez

const customer = new Customer("1", "ericfelipess07@gmail.com", "Eric Felipe", "ericlindo", "0437-2383-3903-8379");
console.log(
  customer.getId(),
  customer.getEmail(),
  customer.getName(),    
  );

// 3)
// a)não, o password não tem getters e é uma propriedade privada

// 4)
// a)name, registrationNumber, consumedEnergy.
//  Consegui imprimir 3 propriedades e uma função,
//  ocorreu por que eu tive que acessar um item interno da função.

const client: Client ={
    name: "Eric",
    registrationNumber:10,
    consumedEnergy:1000,

    calculateBill: () => {
        return 2    
    }
}

console.log(
    client.name,
    client.registrationNumber,
    client.consumedEnergy,
    client.calculateBill()
);

// 2) 
// a)Não é possível criar uma instância de uma classe abstrata.
// b)Tirando o abstract ou criando uma class filha com o extends

// 3)
// a)Tirando o abstract ou criando uma class filha com o extends

const industry:Industry = {
    cep:"12246023"

    
}
