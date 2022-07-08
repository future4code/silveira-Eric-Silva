import * as jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import {Authentication} from "../model/types"

dotenv.config()

export default class Authenticator {
    generateToken = (authentication: Authentication) => {
       return jwt.sign(
            authentication,
            process.env.JWT_KEY as string, 
            {
                expiresIn: "1h"
            }
        )
    }

    getTokenData = (token: string):string => {
        const tokenData = jwt.verify(
            token,  process.env.JWT_KEY as string, 
        ) as any
        return tokenData.id
    }
}