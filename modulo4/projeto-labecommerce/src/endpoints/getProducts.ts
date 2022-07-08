import { Request, Response } from "express";
import selectProducts from "../data/selectProducts";



export default async function getProducts(req:Request, res:Response){
    try {
        const products = await selectProducts()


        res.status(200).send(products)
    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}