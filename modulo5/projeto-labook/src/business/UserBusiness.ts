import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import { LoginDTO } from "../types/loginDTO";
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
  login = async (input: LoginDTO) => {
    const { email, password } = input;
    if (!email || !password) {
      throw new Error("User not found");
    }
    const loginUser = await this.userData.findByEmail(email);
    if (!loginUser) {
      throw new Error("E-mail or password do not match");
    }
    const passwordIsCorrect = this.hashManager.compare(
      password,
      loginUser.password
    );
    if (!passwordIsCorrect) {
      throw new Error("E-mail or password do not match");
    }
    const token = this.authenticator.generate({ id: loginUser.id});
    return token;
  };
}
