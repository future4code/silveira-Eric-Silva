import { ROLE } from "./User"

export type UserSignup={
    name:string,
    email:string,
    password:string,
    role:ROLE
}

export type UserLogin={
    email:string,
    password:string
}