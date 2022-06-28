import { app } from "./app";
import { UserController } from "./endpoints/UserController";


const userController = new UserController()

app.post('/user/signup', userController.postUser)
app.get('/user/:email', userController.getUserByEmail)
app.get("/userId", userController.getUserById)
app.get("/")