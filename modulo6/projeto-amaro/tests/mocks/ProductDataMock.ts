import { CustomError } from "../../src/business/errors/CustomError";
import { ProductDB, ProductDTO, TagDB } from "../../src/model/Product";
import { product1, product2, productsDBMock, TagMock } from "./ProductMock";

export default class ProductDataMock {
  insertProduct = async (product: ProductDTO) => {};
  getTagByName = async (name: string) => {
    if (name === TagMock.name) {
      return TagMock;
    }
  };
  selectByTag = async (
    products: ProductDTO
  ): Promise<ProductDB[] | undefined> => {
    return productsDBMock
  };
  selectByNameOrId = async (products: ProductDTO): Promise<ProductDB[]> => {
    return productsDBMock
  };
}
