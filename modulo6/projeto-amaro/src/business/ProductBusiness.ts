import ProductData from "../data/ProductData";
import {
  InputCreateProductDTO,
  InputSelectProductDTO,
  ProductDTO,
} from "../model/Product";
import IdGenerator from "../services/IdGenerator";
import { CustomError } from "./errors/CustomError";

export class ProductBusiness {
  constructor(
    private productData: ProductData,
    private idGenerator: IdGenerator
  ) {}

  createProduct = async (input: InputCreateProductDTO) => {
    try {
      const { name, tags } = input;
      if (!name) {
        throw new CustomError(422, "Nome inválido");
      }
      if (!tags || typeof tags !== "object") {
        throw new CustomError(422, "Tags inválidas");
      }

      const id = this.idGenerator.generateId();
      const newProduct: ProductDTO = { id, name, tags };
      await this.productData.insertProduct(newProduct);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
  selectProduct = async (input: InputSelectProductDTO) => {
    try {
      const { id, name, tags } = input;
      if ((!id && !name && !tags) || typeof(tags)!=="object") {
        throw new CustomError(422, "Nenhum parâmetro para a busca foi passado")
      }

      return await this.productData.selectByIdNameOrTag({ id, name, tags });
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
export default new ProductBusiness(new ProductData(), new IdGenerator());
