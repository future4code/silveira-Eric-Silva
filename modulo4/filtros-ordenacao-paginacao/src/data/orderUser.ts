import { connection } from ".."


export default async function orderUser(order:string, sort:string):Promise<any> {
    const result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula49_exercicio
        ORDER BY ${sort} ${order};
    `)
 
    return result[0]
 }