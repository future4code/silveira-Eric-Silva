import { Request, Response } from "express";
import UserDataBase from "../data/UserDataBase";
import { Authentication } from "../model/types";
import { UserModel } from "../model/UserModel";
import { generateId } from "../service/GenerateId";
import Authenticator from "../service/Authenticator";
import GenerateHash from "../service/GenerateHash";

export class UserController{
    async signup(req:Request, res:Response):Promise<void>{
        try {
            const {email, password, role} = req.body

            if(!email || !password || !role){
                res.statusCode = 422
                throw new Error("The email and password must be passed")
            }
            if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new Error("Invalid email");
            }
            if (!req.body.password || req.body.password.length < 6) {
                throw new Error("Invalid password");
            }
            const hashPassword = new GenerateHash()
            const id: string = new generateId().generateId()
            const user = new UserModel(id, email, hashPassword.hash(password), role)
            const userDB = new UserDataBase()
            const payload: Authentication  = {
                id:user.getId(),
                role:user.getRole()
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

            const userDB = new UserDataBase()
            const user = await userDB.select(email)
            const compareResult = new GenerateHash()

            if(user.email != email || !compareResult.compare(password, user.password)){
                throw new Error("Parameter invalid")
            }
            
            const payload: Authentication  = {
                id:user.id,
                role:user.role
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