export class Recipe {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private creation_date: string,
    private id_user: string
  ) {}
  public getId(): string {
    return this.id;
  }
  public getTitle(): string {
    return this.title;
  }
  public getDescription(): string {
    return this.description;
  }
  public getCreationDate(): string {
    return this.creation_date;
  }
  public getIdUser():string{
    return this.id_user
  }
  public setCreationDate(creation_date:string):void{
    this.creation_date = creation_date
  }
  static toRecipeModel(data: any): Recipe {
    return new Recipe(data.id, data.title, data.description, data.creation_date, data.id_user);
  }
}
