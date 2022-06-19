import { connection } from "./connection";

export default async function selectProducts():Promise<any>{
return await connection("labecommerce_products")
.select("*")
}