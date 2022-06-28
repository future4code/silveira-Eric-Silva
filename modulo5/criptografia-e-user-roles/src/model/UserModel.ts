import { Role } from "./types"

export class UserModel{
    constructor(
        private id: string,
        private email: string,
        private password:string,
        private role:Role
    )
    {}
    public getId():string{
       return this.id
    }
    public getEmail():string{
        return this.email
    }
    public getPassword():string{
        return this.password
    }
    public getRole():Role{
        return this.role
    } 
}