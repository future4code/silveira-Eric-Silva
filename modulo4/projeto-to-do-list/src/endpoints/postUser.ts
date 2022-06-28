import { Request, Response } from "express"
import { connection } from "../data/dataBase"

export default async function postUser(req:Request, res:Response){
    let ErrorCode = 200
try {
    if(!req.body.name){
        ErrorCode = 404
        throw new Error("The name input is empty")
    } else if(!req.body.nickname){
        ErrorCode = 404
        throw new Error("The nickname input is empty")
    } else if(!req.body.email){
        ErrorCode = 404
        throw new Error("The email input is empty")
    }
    await connection("TodoListUser")
    .insert({
         id: Date.now().toString(),
         name: req.body.name,
         nickname: req.body.nickname,
         email: req.body.email   
});

res.status(201).send("User successfully created")

} catch (error:any) {
    console.log(error.message);
    res.status(ErrorCode).send(error.sqlMessage || error.message)

}
}