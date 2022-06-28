import { Request, Response } from "express"
import { connection } from "../data/dataBase"

export default async function getTaskId(req:Request, res:Response) {
    let ErrorCode = 200
    try{
        const buscarTask = await connection ("TodoListTask")
        .select("*")
        .where({ id: req.params.id})
        const buscarUser = await connection ("TodoListUser")
        .select("nickname")
        .where ({ id:buscarTask[0].creator_user_id})
        const dateFormat = new Date(buscarTask[0].limit_date).toISOString().substring(0, 10).split("-").reverse().join("/");
        const resultadoFinal = {...buscarTask[0], limit_date:dateFormat, creatorUserNickname: buscarUser[0].nickname}
        
    if (buscarUser.length === 0){
        ErrorCode = 404
        throw new Error ('User not found')
    }
    res.status(200).send(resultadoFinal)
}catch(error:any){
    res.status(ErrorCode).send(error.sqlMessage || error.message)
    }
}