import express, {Request, Response} from "express";
import cors from "cors";
import { users, User } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Pai ta Online 😎")
});

app.get("/users", (req:Request, res:Response)=>{
    res.status(200).send(users)
})

app.get("/users/:type", (req:Request, res:Response)=>{
    let errorCode:number = 400
    try{
        const type:string = (req.params.type)
        if (!type){
            errorCode = 422
            throw new Error ("Invalid value for type. Please send a string")
        }
        const user = users.filter((user)=>{
            return user.type === type
        })
        if(!user){
            errorCode = 404
            throw new Error("User a not found.")
        }
        res.status(200).send(user)
    }catch(error:any){
        res.status(errorCode).send({mensagem: error.message})
    }
    
 
})
app.get("/users/search/:name", (req:Request, res:Response)=>{
    let errorCode:number = 400
    try{
        const name:string = (req.params.name)
        if (!name){
            errorCode = 422
            throw new Error ("Invalid value for name. Please send a string")
        }
        const user = users.filter((user)=>{
            return user.name === name
        })
        if(!user.length){
            errorCode = 404
            throw new Error("User a not found.")
        }
        res.status(200).send(user)
    }catch(error:any){
        res.status(errorCode).send({mensagem: error.message})
    }
    
 
})

app.post("/users", (req:Request, res:Response)=>{
    let errorCode:number = 400
    try{
        const {id, name, email, type, age} = req.body
        if (!id || !name || !email || !type || !age){
            errorCode = 422
            throw new Error("Please check the fields!")
        }
        const newUser: User ={
            id,
            name,
            email,
            type,
            age
        }
        users.push(newUser)
        res.status(201).send({message:"User created successfully"})

    }catch(error:any){
        res.status(errorCode).send({mensagem: error.message})
    }
})

app.put("users/editar:id", )