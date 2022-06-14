import { connection } from ".."


export default async function filterTypeUser(type:string):Promise<any> {

    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio 
       WHERE type
       LIKE "%${type}%"
       ;
    `)
 
    return result[0]
 }