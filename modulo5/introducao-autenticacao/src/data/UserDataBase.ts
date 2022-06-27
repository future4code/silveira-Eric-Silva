import { UserModel } from "../model/UserModel";
import BaseDatabase from "./BaseDatabase";

export default class UserDataBase extends BaseDatabase{
    public async insert(user:UserModel){
        try {
            await BaseDatabase.connection("User")
            .insert({
                id:user.getId,
                email:user.getEmail,
                password:user.getPassword
            })
        } catch (error:any) {
            throw new Error("Erro no UserDataBase insert")
        }
    }
}