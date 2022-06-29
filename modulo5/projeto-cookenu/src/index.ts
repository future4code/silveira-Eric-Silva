import { app } from "./app";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";


app.post("/user", signup)
app.get("/user/login", login)