import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { LoginDTO } from "../types/loginDTO";
import { SignupDTO } from "../types/signupDTO";

export default class UserController {
    constructor(
        private userBusiness:UserBusiness
    ){}
  signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const input: SignupDTO = {
      name,
      email,
      password
    };
    try {
        const token = await this.userBusiness.signup(input)
        res.status(201).send({message:"User registered successfully", token})
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).send(error.message)
        }
        res.status(500).send("error in signup")
    }
  };
   login = async (req:Request, res:Response) =>{
    const {email, password} = req.body

    const input: LoginDTO = {
        email,
        password
    }
    try {
        const token = await this.userBusiness.login(input)
        res.status(200).send({message:"post created successfully", token})
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).send(error.message)
        }
        res.status(500).send("error in login")
    }
   }
}
