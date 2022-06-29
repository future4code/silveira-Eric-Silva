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
    } catch (error) {}
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
}
