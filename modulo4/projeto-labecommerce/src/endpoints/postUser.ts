import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { Users } from "../type";

export default async function postUsers(req:Request, res:Response):Promise<void> {
   try {
    const users: Users={
        id: Date.now() + Math.random().toString(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    if(!users){
        throw new Error ("Usuário inválido")
    }
    
    await insertUser(users)
    res.status(201).send("Usuário criado com sucesso")
   } catch (error:any) {
    res.status(400).send(error.message || error.sqlMessage)
   }     
}