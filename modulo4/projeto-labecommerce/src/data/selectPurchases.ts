import { connection } from "./connection";

export default async function selectPurchases():Promise<any>{
return await connection("labecommerce_purchases")
.select("*")
}