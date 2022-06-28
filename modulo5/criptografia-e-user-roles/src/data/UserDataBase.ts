import BaseDatabase from "./BaseDatabase"
import { UserModel } from "../model/UserModel"
import { UserType } from "../model/types"

export default class UserDataBase extends BaseDatabase{
    public async insert(user:UserModel){
        try {
            await BaseDatabase.connection("User")
            .insert({
                id:user.getId(),
                email:user.getEmail(),
                password:user.getPassword(),
                role:user.getRole()
            })
        } catch (error:any) {
            throw new Error("Erro no UserDataBase insert")
        }
    }
    public async select(email:string):Promise<UserType>{
        try {
            const result = await BaseDatabase.connection("User")
            .select("*")
            .where("email", "=", email)
            return result [0]
        } catch (error:any) {
            throw new Error ("Erro no UserDataBase select")

        }
    }
    public async selectById(id:string):Promise<UserType>{
        try {
            const result = await BaseDatabase.connection("User")
            .select("*")
            .where("id", "=", id)
            return result [0]
        } catch (error:any) {
            throw new Error ("Erro no UserDataBase select")

        }
    }
}