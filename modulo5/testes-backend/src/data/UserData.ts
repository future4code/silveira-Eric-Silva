import User, { FindByIdResponse } from "../model/User";
import { FindByEmailResponse } from "../model/User";
import {BaseDatabase} from "./BaseDatabase";

export default class UserData extends BaseDatabase {
   protected TABLE_NAME = "User_Arq";

  insert = async(user:User) =>{
    try {
        await UserData.connection(this.TABLE_NAME)
        .insert(user)
    } catch (error) {
        if (error instanceof Error){
            throw new Error(error.message)
        }else{
            throw new Error("bank error")
        }
        
    }
  }

  findByEmail = async (email: string) => {
    try {
      const queryResult:FindByEmailResponse = await UserData.connection(this.TABLE_NAME)
        .select()
        .where({ email });
      return queryResult[0];
    } catch (error) {
        throw new Error("User error fetch")
    }
  };

  selectById = async (id: string):Promise<FindByIdResponse> => {
    try {
    const result = await UserData.connection(this.TABLE_NAME)
        .select("*")
        .where("id", "=", id);
    const user:FindByIdResponse = {
        id:result[0].id,
        name:result[0].name,
        email:result[0].email,
        role: result[0].role
    } 
    return user
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("bank error");
      }
    }
  };
}
