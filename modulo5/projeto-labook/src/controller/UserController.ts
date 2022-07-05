import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
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
        console.log(token)
        res.status(201).send({message:"User registered successfully", token})
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).send(error.message)
        }
    }
  };
}
