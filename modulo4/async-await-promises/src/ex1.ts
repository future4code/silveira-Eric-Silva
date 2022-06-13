import axios from "axios";
import { baseURL } from "./baseUrl";

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