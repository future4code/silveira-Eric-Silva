import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";

export async function allUsers(req: Request, res: Response) {
  let statusCode = 200;
  try {
    const token = req.headers.authorization;

    if (!token) {
      res
        .status(422)
        .send("Esse endpoint exige autorização a ser passada nos headers");
    }
    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenData(token);

    if (tokenData.role != "ADMIN") {
      res
        .status(401)
        .send("Somente administradores podem acessar essa funcionalidade.");
    }

    const userDatabase = new UserDataBase();
    const users = await userDatabase.allUsers();

    res.status(200).send(users);
  } catch (error: any) {
    if (error.message.includes("jwt")) {
      statusCode = 401;
      error.message = "Token expirado";
    }
    res.status(statusCode).send(error.message);
  }
}
