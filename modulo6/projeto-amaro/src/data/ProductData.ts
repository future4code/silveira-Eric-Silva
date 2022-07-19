import { CustomError } from "../business/errors/CustomError";
import Product from "../model/Product";
import BaseDatabase from "./BaseDatabase";

export default class ProductData extends BaseDatabase {
  insertProduct = async (product: Product) => {
    try {
      await ProductData.connection("amaro").insert(product);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };
}
