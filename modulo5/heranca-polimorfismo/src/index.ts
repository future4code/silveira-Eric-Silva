import { User } from "./Classes/User";
import {Customer} from "./Classes/Customer"
import { Client } from "./Interface/Client";
import { Place } from "./Classes/Place";
import { Industry } from "./Classes/Industry";
import { Commerce } from "./Classes/Commerce";
import { Residence } from "./Classes/Residence";
import { ResidentialClient } from "./Classes/ResidentialClient";
import { CommercialClient } from "./Classes/CommercialClient";


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
// a)Tirando o abstract ou criando uma classe filha com o extends

const residence = new Residence(257, "89324778")
console.log(
    residence.getCep(),
    residence.getResidentsQuantity()
)

const commerce = new Commerce(567, "23870038")
console.log(
    commerce.getCep(),
    commerce.getFloorsQuantity()
)

const industry = new Industry(897, "47220000")
console.log(
    industry.getCep(),
    industry.getMachinesQuantity()
)


const residentialClient = new ResidentialClient("98776538700", "Eric Felipe", 1, 900, 5, "4722000")
console.log(
    residentialClient.getCpf(),
    residentialClient.getCep(),
    residentialClient.name,
    residentialClient.registrationNumber,
    residentialClient.consumedEnergy,
    residentialClient.getResidentsQuantity(),
    residentialClient.calculateBill()
);

// 4)
// a) Só possui o método getters para visualizar as informações.

const commercialClient = new CommercialClient("86327802394","Eric Felipe", 1, 900, 5, "4722000")
console.log(
    commercialClient.getCnpj(),
    commercialClient.getCep(),
    commercialClient.name,
    commercialClient.registrationNumber,
    commercialClient.consumedEnergy,
    commercialClient.calculateBill()
);

// 5)
// a)As duas são filhas de Residence e fazem a implementação da interface Client
// b) Como se trata de um residential client e de um comercial client, um tem cpf como propriedade e o outro tem cnpj. tirando isso, os valores multiplicado são diferentes também.

