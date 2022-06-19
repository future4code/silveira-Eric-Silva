import { Product } from "../type";
import { connection } from "./connection";

export default async function insertProduct(product:Product){
const {id, name, price, image_url} = product
 await connection("labecommerce_products").insert({
    id,
    name,
    price,
    image_url
 })
}