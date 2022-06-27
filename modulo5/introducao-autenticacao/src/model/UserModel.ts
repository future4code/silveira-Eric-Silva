export class UserModel{
    constructor(
        private id: string,
        private email: string,
        private password:string
    ){
        this.id=id,
        this.email=email,
        this.password=password
    }
    public getId():string{
       return this.id
    }
    public getEmail():string{
        return this.email
    }
    public getPassword():string{
        return this.password
    } 
}