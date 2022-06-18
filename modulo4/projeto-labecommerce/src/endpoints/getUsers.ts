import { Request, Response } from "express";
import selectUsers from "../data/selectUsers";


export default async function getUsers(res:Response, req:Request):Promise<void>{
    try {
        const users = await selectUsers()

        // if(!users){
        //     res.statusCode = 404
        //     throw new Error("No users found")
        // }

        res.status(200).send(users)
    } catch (error:any) {
        res.status(400).send("Algo inesperado ocorreu")
    }
}