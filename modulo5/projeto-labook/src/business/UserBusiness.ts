import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import { SignupDTO } from "../types/signupDTO";

export default class UserBusiness {
  constructor(
    private userData: UserData,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}
  signup = async (input: SignupDTO) => {
    const { name, email, password } = input;
    if (!name || !email || !password) {
      throw new Error("invalid fields");
    }

    const registeredUser = await this.userData.findByEmail(email);
    if (registeredUser) {
      throw new Error("E-mail already registered");
    }

    const id = this.idGenerator.generateId();

    const hashedPassword = await this.hashManager.hash(password);

    const user = new User(id, name, email, hashedPassword);
    await this.userData.insert(user);

    const token = this.authenticator.generate({ id });

    return token;
  };
}
