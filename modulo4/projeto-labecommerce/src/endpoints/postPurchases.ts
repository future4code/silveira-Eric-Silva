import { Request, Response } from "express";
import insertPurchases from "../data/insertPurchases";
import { Purchases } from "../type";

export default async function postPurchases(req:Request, res:Response):Promise<void> {
   try {
    const purchases: Purchases={
        id: Date.now() + Math.random().toString(),
        user_id: req.body.user_id,
        product_id: req.body.product_id,
        quantity: req.body.quantity,
        total_price: req.body.total_price
    }
    if(!purchases){
        throw new Error ("Compra inválida")
    }
    
    await insertPurchases(purchases)
    res.status(201).send("Compra concluída com sucesso")
   } catch (error:any) {
    res.status(400).send(error.message || error.sqlMessage)
   }     
}