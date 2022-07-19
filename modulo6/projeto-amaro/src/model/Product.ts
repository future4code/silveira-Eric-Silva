export enum TAG {
    CLOTHES="CLOTHES",
    SHOES="SHOES",
    ACCESSORIES="ACCESSORIES",
    BEAUTY="BEAUTY",
    HOUSE="HOUSE",
    CHILD="CHILD"
}

export default class Product{
    constructor(
        private id:string,
        private name:string,
        private price:number,
        private photo:string,
        private description:string,
        private tag:TAG
    ){}
}

export interface inputCreateProductDTO{
    name:string
    price:number
    photo:string
    description:string
    tag:TAG
}