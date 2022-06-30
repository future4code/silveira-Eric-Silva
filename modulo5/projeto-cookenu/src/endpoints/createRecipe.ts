import { Request, Response } from "express";
import { RecipeDataBase } from "../data/RecipeDatabase";
import { Recipe } from "../entities/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export async function createRecipe(req: Request, res: Response) {
  try {
    const { title, description } = req.body;
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();
    const creation_date = new Date().toISOString().slice(0, 10);
    const token = req.headers.authorization;
    const tokenData = new Authenticator().getTokenData(token);

    if (!token) {
      res.status(422).send("token invalido");
    }
    if (!title || !description) {
      res.status(422).send("Insira 'title' e 'description'");
    }

    const newRecipe = new Recipe( id, title, description, creation_date, tokenData.id)
    const recipeDB = new RecipeDataBase() 
    await recipeDB.createRecipe(newRecipe)

    res.status(201).send({ message: "Receita cadastrada com sucesso"});
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
