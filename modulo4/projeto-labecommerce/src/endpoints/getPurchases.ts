import { Request, Response } from "express";
import selectPurchases from "../data/selectPurchases";



export default async function getPurchases(req:Request, res:Response){
    try {
        const user_id = req.params.user_id
        const purchases = await selectPurchases()


        res.status(200).send(purchases)
    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}