import { Request, Response } from "express"
import { connection } from "../data/dataBase"

export default async function putEditUser(req:Request, res:Response){
    let ErrorCode = 200
    try { 
        if(!req.body.name || !req.body.nickname || !req.body.email){
            ErrorCode = 404
            throw new Error ("User not found")
        }
         await connection ("TodoListUser")
        .update({name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email})
        .where({id: req.params.id})
        
        res.status(200).send("User edit successfully")
} catch (error:any) {
    res.status(ErrorCode).send(error.sqlMessage || error.message)
    }
}