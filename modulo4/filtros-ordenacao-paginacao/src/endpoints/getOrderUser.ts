import orderUser from "../data/orderUser"
import { Response, Request } from "express"


export const getOrderUser = async(req: Request,res: Response): Promise<void> =>{
    let order = req.query.order == "DESC" ? "DESC" : "ASC" 
    let sort = req.query.sort == "type" ? "type" : "email" || "name" ? "name" : "email"
    try {
       const users = await orderUser(order, sort)
 
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