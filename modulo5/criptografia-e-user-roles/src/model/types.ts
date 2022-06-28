export enum Role{
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type Authentication = {
    id:string
    role:Role
}

export type UserType = {
    id: string
    email:string
    password: string
    role:Role
}