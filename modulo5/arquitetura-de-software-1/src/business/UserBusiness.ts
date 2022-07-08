import { UserDataBase } from "../data/UserDataBase";
import { User } from "../model/User";
import { HashManager } from "../service/HashManager";
import { IdGenerator } from "../service/IdGenerator";
import { Authenticator } from "../service/Authenticator";
import { UserLogin, UserSignup } from "../model/types";

export class UserBusiness {
  public async createUser(user:UserSignup) {
    try {
      if (
        !user.name||
        !user.email ||
        !user.password ||
        !user.role
      ) {
        throw new Error("Please fill all the fields");
      }

      if (user.email.indexOf("@") === -1) {
        throw new Error("Invalid Email");
      }

      if (user.password.length < 6) {
        throw new Error("Password must have at least 6 characters");
      }
      const idGenerator = new IdGenerator();
      const id = idGenerator.generate();

      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(user.password);

      const userDB = new UserDataBase();
      const newUser = new User(
        id,
        user.name,
        user.email,
        hashPassword,
        user.role
      );
      await userDB.createUser(newUser);

      const authenticator = new Authenticator();
      const token = authenticator.generate({ id, role: user.role });

      return token;
    } catch (error: any) {
      throw new Error(
        error.message ||
          "Error creating user. Please check your system administrator."
      );
    }
  }
  public async login(user:UserLogin){
    if (
      !user.email ||
      !user.password
      ) {
      throw new Error("Please fill all the fields");
    }

    if (user.email.indexOf("@") === -1) {
      throw new Error("Invalid Email");
    }

    if (user.password.length < 6) {
      throw new Error("Password must have at least 6 characters");
    }
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(user.password);

    const userDB = new UserDataBase();
    const newUser = new User(
      id,
      user.name,
      user.email,
      hashPassword,
      user.role
    );
    await userDB.createUser(newUser);

    const authenticator = new Authenticator();
    const token = authenticator.generate({ id, role: user.role });

    return token;
  } catch (error: any) {
    throw new Error(
      error.message ||
        "Error creating user. Please check your system administrator."
    );
  }
}
