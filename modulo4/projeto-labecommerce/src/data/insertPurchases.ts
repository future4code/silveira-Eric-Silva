import { Purchases } from "../type";
import { connection } from "./connection";

export default async function insertPurchases(purchases:Purchases){
const {id, user_id, product_id, quantity, total_price} = purchases
 await connection("labecommerce_purchases").insert({
    id,
    user_id,
    product_id,
    quantity,
    total_price
 })
}