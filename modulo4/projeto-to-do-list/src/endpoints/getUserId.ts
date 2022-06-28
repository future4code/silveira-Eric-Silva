import { Request, Response } from "express"
import { connection } from "../data/dataBase"

export default async function getUserId(req:Request, res:Response){
        let ErrorCode = 200
        try{
            const buscarPessoa = await connection ("TodoListUser")
            .select("name")
            .where({ id: req.params.id})
        if (buscarPessoa.length === 0){
            ErrorCode = 404
            throw new Error ('User not found')
        }
        res.status(200).send(buscarPessoa)
    }catch(error:any){
        res.status(ErrorCode).send(error.sqlMessage || error.message)
        }
    }