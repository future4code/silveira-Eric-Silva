
import { CustomError } from "../errors/CustomError";

export class ProductValidation {
  createProduct(input:any) {
    this.name(input.name),
    this.tags(input.tags)
  }
  // selectProduct(input:InputSelectProductDTO){
  //   this.idNameOrTag(input.id, input.name, input.tag)
  // }
  private name = (name: string) => {
    if (!name) {
      throw new CustomError(422, "Produto inválido");
    }
  };
  private tags = (tag: string) => {
    if (!tag) {
      throw new CustomError(422, "Tag inválida");
    }
  };
//   private idNameOrTag = (id:string, name:string, tag:TAG) => {
//     if(!id && !name && !tag){
//         throw new CustomError(422, "Não foi passado um termo para a busca");
//     }
// }
};