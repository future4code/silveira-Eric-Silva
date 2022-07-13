import UserData from "../data/UserData";
import User, { InputSelectUserDTO } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";
import { InputSignupDTO } from "../model/User";
import { InputLoginDTO } from "../model/User";
import { NotFound } from "./errors/NotFound";
import { CustomError } from "./errors/CustomError";

export default class UserBusiness {
  constructor(
    private userData: UserData,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}
  signup = async (input: InputSignupDTO) => {
    const { name, email, password, role } = input;
    if (!name || !email || !password || !role) {
      throw new Error("invalid fields");
    }

    const registeredUser = await this.userData.findByEmail(email);
    if (registeredUser) {
      throw new Error("E-mail already registered");
    }

    const id = this.idGenerator.generateId();

    const hashedPassword = await this.hashManager.hash(password);

    const user = new User(id, name, email, hashedPassword, role);
    await this.userData.insert(user);

    const token = this.authenticator.generate({ id, role });

    return token;
  };
  login = async (input: InputLoginDTO) => {
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
    const token = this.authenticator.generate({ id: loginUser.id, role: loginUser.role});
    return token;
  };
  selectUser = async (id:string) => {
    console.log(id)
    try {
    if (!id) {
      throw new Error("invalid id");
    }
    const user = await this.userData.selectById(id);
    console.log(user)
    if (!user) {
      throw new NotFound("User not found");
    }
    return user
    } catch (error) {
      throw new NotFound("User not found")
    }
  };
}

