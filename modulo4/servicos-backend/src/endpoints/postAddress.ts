
import { Request, Response } from "express";
import insertAddress from "../data/insertAddress";
import { getFullAddress } from "../services/getFullAddress";


export const postAddress = async (req:Request, res:Response) =>{
    try {
        const cep = req.params.cep
        const address = await getFullAddress(cep)

       
        
        if(!address){
            throw new Error ("cep inválido")
        }

        await insertAddress(address)

        res.status(201).send("Endereço criado com sucesso")
    } catch (error:any) {
        res.status(400).send("n funfou")
    }
}