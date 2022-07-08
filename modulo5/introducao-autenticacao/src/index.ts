import { app } from "./app";
import { UserController } from "./endpoints/UserController";


const userController = new UserController()

app.post('/user/signup', userController.postUser)
app.get('/user/login/:email/:password', userController.getLogin)
app.get("/userId", userController.getUserById)
