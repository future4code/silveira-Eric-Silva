import { Request, Response } from "express";
import insertProduct from "../data/insertProduct";
import { Product } from "../type";

export default async function postProduct(req:Request, res:Response):Promise<void> {
   try {
    const product: Product={
        id: Date.now() + Math.random().toString(),
        name: req.body.name,
        price: req.body.price,
        image_url: req.body.image_url
    }
    if(!product){
        throw new Error ("Produto inválido")
    }
    
    await insertProduct(product)
    res.status(201).send("Produto criado com sucesso")
   } catch (error:any) {
    res.status(400).send(error.message || error.sqlMessage)
   }     
}