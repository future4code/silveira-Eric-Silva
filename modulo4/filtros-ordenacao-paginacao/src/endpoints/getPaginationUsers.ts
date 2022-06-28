import paginationUsers from "../data/paginationUsers"
import { Response, Request } from "express"


export const getPaginationUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        // let size = 2
        let page = Number(req.query.page)
        // let offset = size*(page) 
        // if(page<1||isNaN(page -1)){
        //     page=1
        // }
       const users = await paginationUsers(page)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }