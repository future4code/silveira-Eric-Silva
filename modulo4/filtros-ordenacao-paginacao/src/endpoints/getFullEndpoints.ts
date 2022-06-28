import filterNameUser from "../data/filterNameUser"
import filterTypeUser from "../data/filterTypeUser"
import orderUser from "../data/orderUser"
import paginationUsers from "../data/paginationUsers"
import { Response, Request } from "express"


export const getFullEndpoints = async(req: Request,res: Response): Promise<void> =>{
   const name = req.params.name as string
   const type = req.query.type as string
   let order = req.query.order == "DESC" ? "DESC" : "ASC" 
   let sort = req.query.sort == "type" ? "type" : "email" || "name" ? "name" : "email"
   let page = Number(req.query.page)
    try {

       const users = await filterNameUser(name) || filterTypeUser(type) || orderUser(order, sort) || paginationUsers(page)
 
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