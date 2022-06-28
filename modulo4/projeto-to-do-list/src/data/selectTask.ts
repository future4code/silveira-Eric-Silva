import { connection } from "./dataBase";

export default async function selectUser(id:string) {
    const result = await connection("TodoListTask")
    .select("*")
    .where({id})
    return result [0][0]
}