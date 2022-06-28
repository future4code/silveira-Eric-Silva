import * as jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import { Authentication } from "../model/type"

dotenv.config()

export default class Authenticator {
    generateToken = (authentication: Authentication) => {
       return jwt.sign(
            authentication,
            process.env.JWT_KEY as string, 
            {
                expiresIn: "1min"
            }
        )
    }

    getTokenData = (token: string) => {
        const tokenData = jwt.verify(
            token,  process.env.JWT_KEY as string, 
        )

        return tokenData
    }
}
