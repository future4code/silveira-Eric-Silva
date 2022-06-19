import { connection } from "./connection";

export default async function selectUsers():Promise<any>{
return await connection("labecommerce_users")
.select("*")
}
