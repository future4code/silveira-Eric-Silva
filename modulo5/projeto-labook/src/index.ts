import UserBusiness from "./business/UserBusiness";
import { app } from "./controller/app";
import UserController from "./controller/UserController";
import UserData from "./data/UserData";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import IdGenerator from "./services/IdGenerator";

const userController = new UserController(
  new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
  )
);

app.post("/user/signup", userController.signup);
