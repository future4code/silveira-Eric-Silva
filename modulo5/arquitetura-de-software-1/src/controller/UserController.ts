import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserLogin, UserSignup } from "../model/types";

export class UserController {
  async signup(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password, role } = req.body;

      const userSignup: UserSignup = {
        name,
        email,
        password,
        role,
      };

      const token = await new UserBusiness().createUser(userSignup);
      res
        .status(200)
        .send({ message: "Usuário cadastrado com sucesso", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const UserLogin: UserLogin = {
        email,
        password,
      };
      const token = await new UserBusiness().createUser(UserLogin);
      res.status(200).send({ message: "Usuário logado com sucesso", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
