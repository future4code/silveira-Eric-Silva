export enum TYPE{
    NORMAL = "normal",
    ADMIN = "evento"
}

export default class Post {
   constructor( 
    private id:string,
    private photo:string,
    private description:string,
    private creation_date:string,
    private type:TYPE,
    private user_id:string
    ){}
}