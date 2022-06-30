import { app } from "./app";
import { allUsers } from "./endpoints/allUsers";
import { createRecipe } from "./endpoints/createRecipe";
import { login } from "./endpoints/login";
import { recipeId } from "./endpoints/recipeId";
import { signup } from "./endpoints/signup";
import { userId } from "./endpoints/userId";



app.get("/recipe/:id", recipeId)
// Criar receita 
app.post("/recipe", createRecipe)
//Cria um usuário
app.post("/signup", signup)
//Loga em um usuário
app.post("/login", login)
// Só para ADM
app.get("/users/profiles", allUsers)
//Busca usuário por Id
app.get ("/user/:id", userId)


