import { connection } from ".."


export default async function filterNameUser(name:string):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio 
       WHERE name
       LIKE "%${name}%"
       ;
    `)
 
    return result[0]
 }