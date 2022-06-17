// no index.ts:

import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { getAddress } from "./endpoints/getAddress";
import { postAddress } from "./endpoints/postAddress";


const app: Express = express();
app.use(express.json());
app.use(cors());

app.get(`/address/:cep`, getAddress)

app.post(`/user/:cep`, postAddress)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});