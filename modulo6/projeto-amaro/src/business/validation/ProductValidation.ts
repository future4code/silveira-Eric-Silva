import { inputCreateProductDTO, TAG } from "../../model/Product";
import { CustomError } from "../errors/CustomError";

export class ProductValidation {
  createProduct(input: inputCreateProductDTO) {
    this.name(input.name),
    this.price(input.price),
    this.photo(input.description),
    this.description(input.description),
    this.tag(input.tag)
  }
  private name = (name: string) => {
    if (!name) {
      throw new CustomError(422, "Nome inválido");
    }
  };
  private price = (price: number) => {
    if (!price) {
      throw new CustomError(422, "Nome inválido");
    }
  };
  private photo = (photo: string) => {
    if (!photo) {
      throw new CustomError(422, "Nome inválido");
    }
  };
  private description = (description: string) => {
    if (!description) {
      throw new CustomError(422, "Nome inválido");
    }
  };
  private tag = (tag: TAG) => {
    if (!tag) {
      throw new CustomError(422, "Nome inválido");
    }
  };
}
