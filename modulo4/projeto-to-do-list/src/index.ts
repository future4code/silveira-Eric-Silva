// no index.ts:

import express, { Express, response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import postUser from "./endpoints/postUser";
import getUserId from "./endpoints/getUserId";
import putEditUser from "./endpoints/putEditUser";
import postTask from "./endpoints/postTask";
import getTaskId from "./endpoints/getTaskId";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/user",postUser)

app.get('/user/:id', getUserId)

app.put("/user/edit/:id", putEditUser)
   
app.post("/task", postTask)

app.get("/task/:id", getTaskId)



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});