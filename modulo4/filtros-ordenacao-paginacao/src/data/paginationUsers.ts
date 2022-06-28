import { connection } from ".."


export default async function selectAllUsers(page:number):Promise<any> {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula49_exercicio
       LIMIT 5
       OFFSET ${5*(page-1)};
    `)
 
    return result[0]
 }