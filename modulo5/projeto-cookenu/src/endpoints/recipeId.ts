import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";
import { createRecipe } from "./createRecipe";

export async function recipeId(req: Request, res: Response) {
  let statusCode = 200;
  try {
    const token = req.headers.authorization;
    const id = req.params.id;

    const recipeDB = new RecipeDataBase();
    const recipe = await recipeDB.selectById(id);
    const date = recipe.getCreationDate()


    const reverteDate = new Date(date).toISOString()
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("/");
    recipe.setCreationDate(reverteDate);

    if (!token) {
      res
        .status(422)
        .send("Verifique se está passando o token corretamente nos headers");
    }

    if (id == recipe.getId()) {
      throw new Error("Receita não encontrado");
    }

    const authenticator = new Authenticator();
    const tokenData = authenticator.getTokenData(token);

    res.status(statusCode).send(recipe);
  } catch (error: any) {
    if (error.message.includes("jwt")) {
      statusCode = 401;
      error.message = "Token expirado";
    }
    res.status(statusCode).send(error.message);
  }
}
