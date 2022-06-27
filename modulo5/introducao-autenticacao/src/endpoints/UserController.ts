import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";
import { UserModel } from "../model/UserModel";
import { generateId } from "../service/generateId";

export class UserController{
    async postUser(req:Request, res:Response):Promise<void>{
        try {
            const {email, password} = req.body
            const id = generateId()
            
            if(!email || !password){
                throw new Error("The email and password must be passed")
            }

            const users = new UserModel(id, email, password)
            const userDB = new UserDataBase()

            await userDB.insert(users)
            res.status(201).send(`User successfully added`)
        } catch (error:any) {
            res.status(500).send(error.message || error.sqlMessage)
        }
    }
}