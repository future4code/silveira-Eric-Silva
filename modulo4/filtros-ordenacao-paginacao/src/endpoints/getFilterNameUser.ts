import filterNameUser from "../data/filterNameUser"
import { Response, Request } from "express"


export const getFilterNameUser = async(req: Request,res: Response): Promise<void> =>{
    const name = req.params.name as string
    try {     
       const users = await filterNameUser(name)
 
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