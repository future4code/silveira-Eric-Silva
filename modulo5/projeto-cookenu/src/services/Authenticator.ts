import * as jwt from "jsonwebtoken";
import { ROLES } from "../entities/User";

export interface AuthenticationData {
  id: string;
  role: string;
}

export class Authenticator {
  public generate(input: AuthenticationData): string {
    const token = jwt.sign(input, process.env.JWT_KEY as string, {
      expiresIn: process.env.EXPIRE_TOKEN,
    });
    return token;
  }

  public getTokenData(token: any): AuthenticationData {
    const data = jwt.verify(token, process.env.JWT_KEY as string);
    return data as AuthenticationData;
  }
}