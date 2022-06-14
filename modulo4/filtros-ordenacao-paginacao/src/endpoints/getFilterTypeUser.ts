import filterTypeUser from "../data/filterTypeUser"
import { Response, Request } from "express"


export const getFilterTypeUser = async(req: Request,res: Response): Promise<void> =>{
    const type = req.query.type as string
    try {     
       const users = await filterTypeUser(type)
 
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