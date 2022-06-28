# Async-Await-Promises

## Exercício 1

### a) getSubscribers

### b) declara o tipo como any

### c)
```
import axios from "axios";
import { baseURL } from "../baseUrl";

async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

  const main = async() =>{
  try {
   const result = await getSubscribers()
   console.log(result)
  } catch (error) {
    
  }
}
main()
```
## Exercício 2

### a) Funções regulares criadas usando declarações de função ou expressões são 'construtíveis' e 'chamáveis'. Uma vez que as funções regulares são construtíveis, elas podem ser chamadas usando a palavra-chave 'novo'. No entanto, as funções de seta são apenas 'chamáveis' e não construtíveis.

### b) 
```
import axios from "axios";
import { baseURL } from "../baseUrl";

    const getSubscribers= async ():Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };

const main = async() =>{
  try {
   const result = await getSubscribers()
   console.log(result)
  } catch (error) {
    
  }
}
main()
```
## Exercício 3

### a) Não 

### b) fica visualmente mais fácil para identificar o tipo de cada elemento dentro do Promise

### c) 
```
import axios from "axios";
import { baseURL } from "../baseUrl";

type user={
      id:string,
      name:string,
      email:string
    }
   

  const getSubscribers= async ():Promise<user[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res:any)=>{
      return {
        id: res.id,
        name:res.name,
        email:res.email
      }
    })
  };

  const main = async() =>{
  try {
   const result = await getSubscribers()
   console.log(result)
  } catch (error) {
    
  }
}
main()
```
#Exercício 4