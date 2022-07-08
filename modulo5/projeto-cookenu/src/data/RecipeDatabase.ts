import { Recipe } from "../entities/Recipe";
import BaseDatabase from "./BaseDatabase";

export class RecipeDataBase extends BaseDatabase {
    public async createRecipe(recipe: Recipe) {
      try {
        await BaseDatabase.connection("recipe").insert({
          id: recipe.getId(),
          title: recipe.getTitle(),
          description: recipe.getDescription(),
          creation_date: recipe.getCreationDate(),
          user_id: recipe.getIdUser()
        });
      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }
    public async selectById(id: string): Promise<Recipe> {
        try {
          const result = await BaseDatabase.connection("recipe")
            .select("title", "description", "creation_date")
            .where("id", "=", id);
          return result[0] && Recipe.toRecipeModel(result[0]);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
      }
}