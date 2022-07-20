import ProductData from "../data/ProductData";
import Product, {
  inputCreateProductDTO,
  InputSelectProductDTO,
} from "../model/Product";
import IdGenerator from "../services/IdGenerator";
import { CustomError } from "./errors/CustomError";
import { ProductValidation } from "./validation/ProductValidation";

export class ProductBusiness {
  constructor(
    private productData: ProductData,
    private idGenerator: IdGenerator,
    private productValidation: ProductValidation
  ) {}

  createProduct = async (input: inputCreateProductDTO) => {
    try {
      const { name, price, photo, description, tag } = input;
      this.productValidation.createProduct(input);
      const id = this.idGenerator.generateId();
      const product = new Product(id, name, price, photo, description, tag);
      await this.productData.insertProduct(product);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
  selectProduct = async (input: InputSelectProductDTO) => {
    try {
      const { id, name, tag } = input;
      this.productValidation.selectProduct(input);
      return await this.productData.selectByIdNameOrTag(id, name, tag);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}
export default new ProductBusiness(
  new ProductData(),
  new IdGenerator(),
  new ProductValidation()
);
