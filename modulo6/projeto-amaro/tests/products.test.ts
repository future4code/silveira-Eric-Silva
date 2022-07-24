import { ProductBusiness } from "../src/business/ProductBusiness";
import {
  InputCreateProductDTO,
  InputSelectProductDTO,
} from "../src/model/Product";
import { IdGeneratorMock } from "./IdGeneratorMock";
import ProductDataMock from "./mocks/ProductDataMock";

const productBusinessMock = new ProductBusiness(
  new ProductDataMock(),
  new IdGeneratorMock()
);

describe("Testing class ProductBusiness", () => {
  describe("testing insertProduct", () => {
    test("test missing name", async () => {
      const input = {
        name: "",
        tags: ["Irineu", "Djonga", "Habbibs"],
      };
      try {
        await productBusinessMock.createProduct(input);
      } catch (error: any) {
        expect(error.statusCode).toEqual(422);
        expect(error.message).toEqual("Nome inválido");
      } finally {
        expect.assertions(2);
      }
    });
    test("test missing tags", async () => {
      const input = {
        name: "a",
        tags: "robson" as any,
      };
      try {
        await productBusinessMock.createProduct(input);
      } catch (error: any) {
        expect(error.statusCode).toEqual(422);
        expect(error.message).toEqual("Tags inválidas");
      } finally {
        expect.assertions(2);
      }
    });
  });
  describe("testing selectProduct", () => {
    test("missing id, name and tags", async () => {
      const input = {
        id: "",
        name: "",
        tags: []
      };
      try {
        await productBusinessMock.selectProduct(input);
      } catch (error: any) {
        expect(error.statusCode).toEqual(422);
        expect(error.message).toEqual(
          "Nenhum parâmetro para a busca foi passado"
        );
      } finally {
        expect.assertions(2);
      }
    });
  });
});
