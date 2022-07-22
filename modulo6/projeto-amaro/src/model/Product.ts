export class Product {
  constructor(
    private id: string,
    private name: string,
    private tags: string[]
  ) {}
  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getTags(): string[] {
    return this.tags;
  }
}
export interface FindByIdNameOrTagResponse {
  name: string;
}
export interface TagDB {
  id: string;
  name: string;
}
