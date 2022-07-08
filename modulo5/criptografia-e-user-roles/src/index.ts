import { app } from "./app";
import { UserController } from "./endpoints/UserController";


const userController = new UserController()

app.post('/user/signup', userController.signup)
app.post('/user/login', userController.getLogin)
app.get('/user/profile', userController.getUserById)