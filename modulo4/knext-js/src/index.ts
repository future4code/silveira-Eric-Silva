// no index.ts:

import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());


app.get("/actor/:name", async (req, res)=>{
   try{
      const actorName = await connection.raw(`
      SELECT * FROM Actor WHERE name LIKE "%${req.params.name}%"
         `)
      res.status(200).send(actorName[0]) 
   }catch(error:any){
      res.status(500).send(error.sqlMessage || error.message)
   }
})

app.get("/actor/:gender/gender", async (req, res)=>{
   try {
      const actorGender = await connection.raw(`SELECT COUNT(gender) FROM Actor WHERE gender="${req.params.gender}"`)
      res.status(200).send(actorGender[0])
   } catch (error:any) {
      res.status(500).send(error.sqlMessage || error.message)
   }
})

app.post("/actor/:id/update-salary", async( req, res)=>{
  try {
      await connection.raw(`
      UPDATE Actor SET (, salary)
      VALUES(${req.body.salary})
      `)
      res.status(200).send("salary alterado com sucesso")
  } catch (error:any) {
      res.status(500).send(error.sqlMessage || error.message)
  }
  

})





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});