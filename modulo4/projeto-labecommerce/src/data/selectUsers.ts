import { connection } from "./connection";

export default async function selectUsers(){
const allUsers = await connection("labecommerce_users")
.select("*")
return allUsers
}
