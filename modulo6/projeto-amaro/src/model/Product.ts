export interface ProductDTO {
  id: string;
  name: string;
  tags: string[];
}
export interface InputCreateProductDTO extends Omit<ProductDTO, "id"> {}
export interface InputSelectProductDTO extends ProductDTO {}
export interface TagDB extends Omit<ProductDTO, "tags"> {}
export interface FindByIdNameOrTagResponse
  extends Omit<ProductDTO, "id" | "tags"> {}
