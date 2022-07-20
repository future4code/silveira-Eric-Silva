import { CustomError } from "../business/errors/CustomError";
import Product, { FindByIdNameOrTagResponse, TAG } from "../model/Product";
import BaseDatabase from "./BaseDatabase";

export default class ProductData extends BaseDatabase {
  insertProduct = async (product: Product) => {
    try {
      await ProductData.connection("amaro").insert(product);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };
  selectByIdNameOrTag = async (
    id: string,
    name: string,
    tag: TAG
  ): Promise<FindByIdNameOrTagResponse[]> => {
    try {
      let result: FindByIdNameOrTagResponse[] = [];
      if (id) {
        result = await ProductData.connection("amaro")
          .select("*")
          .where("id", "=", id);
      } else if (name) {
        result = await ProductData.connection("amaro")
          .select("*")
          .where("name", "=", name);
      } else {
        result = await ProductData.connection("amaro")
          .select("*")
          .where("tag", "=", tag);
      }
      if (result.length === 0) {
        throw new CustomError(404, "Produto não encontrado");
      }
      const product: FindByIdNameOrTagResponse[] = result.map((result)=>{
        return {
          id: result.id,
          name: result.name,
          price: result.price,
          photo: result.photo,
          description: result.description,
          tag: result.tag,
        };
      }) 
      return product;
    } catch (error: any) {
      throw new CustomError(
        error.statusCode || 500,
        error.sqlMessage || error.message
      );
    }
  };
}
