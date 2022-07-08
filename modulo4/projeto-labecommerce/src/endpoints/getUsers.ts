import { Request, Response } from "express";
import selectUsers from "../data/selectUsers";


export default async function getUsers(req:Request, res:Response){
    try {
        const users = await selectUsers()


        res.status(200).send(users)
    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}