import { Request, Response } from "express";
import insertProducts from "../data/insertProducts";
import { Products } from "../type";

export default async function postProducts(req:Request, res:Response):Promise<void> {
   try {
    const products: Products={
        id: Date.now() + Math.random().toString(),
        name: req.body.name,
        price: req.body.price,
        image_url: req.body.image_url
    }
    if(!products){
        throw new Error ("Produto inválido")
    }
    
    await insertProducts(products)
    res.status(201).send("Produto criado com sucesso")
   } catch (error:any) {
    res.status(400).send(error.message || error.sqlMessage)
   }     
}