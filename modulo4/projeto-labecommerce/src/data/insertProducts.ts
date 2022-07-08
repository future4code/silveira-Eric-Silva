import { Products } from "../type";
import { connection } from "./connection";

export default async function insertProducts(products:Products){
const {id, name, price, image_url} = products
 await connection("labecommerce_products").insert({
    id,
    name,
    price,
    image_url
 })
}