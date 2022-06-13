import axios from "axios";
import { baseURL } from "./baseUrl";

    const news = {
        title:"Feriado de São João",
        content:"Este ano o mês de Julho vai ser inteiro de feriado. Isso mesmo! do dia 1 ao dia 30, boas festas!",
        date: Date.now()
    }

    const createNews = (news:any)=>{
        return axios.put(`${baseURL}/news`, news)
    }

    const main = async() =>{
    try {
    const result = await (createNews)
        console.log(result)
    } catch (error) {
          
    }
    }
    main()

