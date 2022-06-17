import { Request, Response } from "express";
import { Users } from "../type";

export default async function postUsers(req:Request, res:Response):Promise<void> {
   try {

    const users: Users={
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        
    }
    
   } catch (error) {
    
   }     
}