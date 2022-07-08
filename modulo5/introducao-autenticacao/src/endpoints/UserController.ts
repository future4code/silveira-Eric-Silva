import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";
import { Authentication } from "../model/type";
import { UserModel } from "../model/UserModel";
import { generateId } from "../service/generateId";
import Authenticator from "../service/Authenticator";

export class UserController{
    async postUser(req:Request, res:Response):Promise<void>{
        try {
            const {email, password} = req.body
            
            if(!email || !password){
                res.statusCode = 422
                throw new Error("The email and password must be passed")
            }
            if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }
            if (!req.body.password || req.body.password.length < 6) {
                throw new Error("Invalid password");
            }
            
            const id: string = new generateId().generateId()
            const user = new UserModel(id, email, password)
            const userDB = new UserDataBase()
            const payload: Authentication  = {
                id:user.getId()
            }
            const token = new Authenticator().generateToken(payload)

            await userDB.insert(user)
            res.status(201).send(token)
        } catch (error:any) {
            res.status(500).send(error.message || error.sqlMessage)
        }
    }
    async getLogin(req:Request, res: Response):Promise<void>{
        try{
            const email = req.params.email
            const password = req.params.password
            const userDB = new UserDataBase()
            const user = await userDB.select(email)
            if(user.email != email || user.password != password){
                throw new Error("Parameter invalid")
            }
            const payload: Authentication  = {
                id:user.id
            }
            const token = new Authenticator().generateToken(payload)
            res.status(200).send(token)
        }catch (error:any){
            res.status(500).send(error.message || error.sqlMessage)
        }
    }
    async getUserById(req:Request, res:Response):Promise<void> {
        try {
            const token = req.headers.authorization as string
            const authentication = new Authenticator()
            const id = authentication.getTokenData(token)
            const userDB = new UserDataBase()
            const user = await userDB.selectById(id) 
            if(id != user.id){
                throw new Error("User not found")
            }
            res.status(200).send(user)

        } catch (error:any) {
            res.status(500).send(error.message || error.sqlMessage)
        }
    }

}