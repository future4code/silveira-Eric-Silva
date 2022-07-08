import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function login(req: Request, res: Response) {
  try {
    const {email, password} = req.body;

    if (!email || !password) {
      res
        .status(422)
        .send(
          "Insira corretamente as informações de 'name', 'email', 'password', 'role'"
        );
    }
    const userDatabase = new UserDataBase();
    const user = await userDatabase.findUserByEmail(email);

    if (!user) {
      res.status(409).send("Esse email não está cadastrado");
    }
    const hashManager = new HashManager()
    const passwordIsCorrect = hashManager.compare(password, user.getPassword())

    if(!passwordIsCorrect){
        res.status(401).send("Email ou senha não são correspondentes")
    }

    const authenticator = new Authenticator();
    const token = authenticator.generate({ id:user.getId(), role:user.getRole() });

    res.status(200).send({ token });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
