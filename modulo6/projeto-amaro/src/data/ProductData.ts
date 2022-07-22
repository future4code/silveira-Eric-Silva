import { CustomError } from "../business/errors/CustomError";
import { Product, FindByIdNameOrTagResponse, TagDB } from "../model/Product";
import IdGenerator from "../services/IdGenerator";
import BaseDatabase from "./BaseDatabase";

export default class ProductData extends BaseDatabase {
  insertProduct = async (product: Product) => {
    try {
      await ProductData.connection("amaro_products").insert({
        id: product.getId(),
        name: product.getName(),
      });
      const tags = product.getTags();
      for (let tag of tags) {
        const tagData = (await this.getTagByName(tag)) as any;
        if (!tagData.name) {
          const tagId = new IdGenerator().generateId();
          await ProductData.connection("amaro_tags").insert({
            id: tagId,
            name: tag,
          });
          (tagData.name = tag), (tagData.id = tagId);
        }
        await ProductData.connection("amaro_products_tags").insert({
          id_product: product.getId(),
          id_tags: tagData.id,
        });
      }
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };
  getTagByName = async (name: string) => {
    try {
      const resultDB = await BaseDatabase.connection("amaro_tags").where({
        name,
      });
      const result = {
        id: resultDB[0]?.id,
        name: resultDB[0]?.name,
      };
      return result;
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };
  selectByIdNameOrTag = async (id: string, name: string, tags: string[]) => {
    try {
      let result: any = [];
      let tagsResult: any = [];
      if (id) {
        result = await ProductData.connection("amaro_products")
          .select("*")
          .where("id", "=", id);
      } else if (name) {
        result = await ProductData.connection("amaro_products")
          .select("*")
          .where("name", "=", name);
      } else {
        const ProductsByTags = async (
          tags: string[]
        ): Promise<FindByIdNameOrTagResponse[][]> => {
          const array = tags.map((tag: string) => {
            return ProductData.connection()
              .select("amaro_products.name as name", "amaro_products.id as id")
              .from("amaro_products")
              .innerJoin(
                "amaro_products_tags",
                "amaro_products_tags.id_product",
                "amaro_products.id"
              )
              .innerJoin(
                "amaro_tags",
                "amaro_products_tags.id_tags",
                "amaro_tags.id"
              )
              .where("amaro_tags.name", tag);
          });
          return Promise.all(array);
        };
        tagsResult = await ProductsByTags(tags);
      }
      console.log(tagsResult);
      if (result.length === 0 && tagsResult.length === 0) {
        throw new CustomError(404, "Produto não encontrado");
      }
      let product = [];
      if (result.length !== 0) {
        product = result.map((result:any) => {
          return {
            name: result.name
          };
        });
      }
      const repeatedProducts:any = [];
      if (tagsResult.length !== 0) {
        tagsResult.map((repeat: any) => {
          repeat.map((tag: any) => {
            repeatedProducts.push({name:tag.name, id:tag.id});
          });
        });
      }
      product = repeatedProducts.map((element:any, index:any)=>{
        if(repeatedProducts.indexOf(element)===index){
          return {name:element.name, id:element.id}
        }
      })
      .filter((product:any)=>product!==null)
      return product;
    } catch (error: any) {
      throw new CustomError(
        error.statusCode || 500,
        error.sqlMessage || error.message
      );
    }
  };
}

