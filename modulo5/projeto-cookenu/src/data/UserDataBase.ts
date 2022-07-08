import { userId } from "../endpoints/userId";
import { User } from "../entities/User";
import BaseDatabase from "./BaseDatabase";

export class UserDataBase extends BaseDatabase {
  public async createUser(user: User) {
    try {
      await BaseDatabase.connection("user").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      });
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await BaseDatabase.connection("user")
        .select("*")
        .where({ email });
      return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async allUsers(): Promise<User[]> {
    try {
      const users = await BaseDatabase.connection("user").select(
        "id",
        "name",
        "email",
        "role"
      );
      return users.map((user) => User.toUserModel(user));
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
  public async selectById(id: string): Promise<User> {
    try {
      const result = await BaseDatabase.connection("user")
        .select("name", "id", "email", "role")
        .where("id", "=", id);
      console.log(id);
      console.log(result);
      return result[0] && User.toUserModel(result[0]);
    } catch (error: any) {
      throw new Error("Erro no UserDataBase select");
    }
  }
}
