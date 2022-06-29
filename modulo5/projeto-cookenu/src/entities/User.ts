export enum ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export class User {

    constructor(
        private id : string,
        private name:string,
        private email:string,
        private password:string,
        private role:ROLES
    ){}
    public getId():string{
        return this.id
    }
    public getName():string{
        return this.name
    }
    public getEmail():string{
        return this.email
    }
    public getPassword():string{
        return this.password
    }
    public getRole():string{
        return this.role
    }
    static toUserModel(data:any): User {
        return new User(data.id, data.name, data.email, data.password, data.role)
    }

    
}

