import { Request, Response } from "express"
import { connection } from "../data/dataBase"

export default async function postTask(req:Request, res:Response) {
    const {limit_date} = req.body
    const limitDate = limit_date.split("/").reverse().join("-")
    let ErrorCode = 200
    try {
        if(!req.body.title){
            ErrorCode = 404
            throw new Error("The title input is empty")
        } else if(!req.body.description){
            ErrorCode = 404
            throw new Error("The description input is empty")
        } else if(!limitDate){
            ErrorCode = 404
            throw new Error("The limit date input is empty")
        }else if(!req.body.creator_user_id){
            ErrorCode = 404
            throw new Error("The user input is empty")
        }
        await connection("TodoListTask")
        .insert({
             id: Date.now().toString(),
             title: req.body.title,
             description: req.body.description,
             limit_date: limitDate,
             creator_user_id: req.body.creator_user_id 
    });
    
    res.status(201).send("Task successfully created")
    
    } catch (error:any) {
        console.log(error.message);
        res.status(ErrorCode).send(error.sqlMessage || error.message)
    
    }
    }