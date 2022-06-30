import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";


export async function userId(req: Request, res: Response) {
  let statusCode = 200
  try {
    
    const token = req.headers.authorization;
    const id = req.params.id;

    const userDatabase = new UserDataBase();
    const user = await userDatabase.selectById(id)

    if (!token) {
    res
      .status(422)
      .send("Esse endpoint exige autorização a ser passada nos headers");
    }

    if(id != user.getId()){
      throw new Error("User not found")
    }
    
    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenData(token);
    

    res.status(statusCode).send(user)
  } catch (error:any) {

     if(error.message.includes('jwt')) {
      statusCode = 401
    error.message = 'Token expirado'
  }
    res.status(statusCode).send(error.message);
   
  }
} 
  
  

