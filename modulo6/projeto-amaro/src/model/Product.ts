export default class Product {
  constructor(
    private id: string,
    private name: string,
    private tags: string[]
    )
    {}
    // public getId():string{
    //   return this.id
    // }
    // public getName():string{
    //   return this.name
    // }
    // public getTags():string[]{
    //   return this.tags
    // }
}

export interface inputCreateProductDTO {
  name: string;
  tags:string[]
}

