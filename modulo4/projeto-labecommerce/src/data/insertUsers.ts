import { Users } from "../type";
import { connection } from "./connection";

export default async function insertUsers(users:Users){
const {id, name, email, password} = users
 await connection("labecommerce_users").insert({
    id,
    name,
    email,
    password
 })
}