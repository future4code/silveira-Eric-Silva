// no index.ts:

import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getFilterNameUser } from "./endpoints/getFilterNameUser";
import { getFilterTypeUser } from "./endpoints/getFilterTypeUser";
import { getOrderUser } from "./endpoints/getOrderUser";
import { getPaginationUsers } from "./endpoints/getPaginationUsers";
import { getFullEndpoints } from "./endpoints/getFullEndpoints";

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

app.get(`/users`, getAllUsers)

app.get(`/filterUser/:name`, getFilterNameUser)

app.get(`/filterType`, getFilterTypeUser)

app.get(`/orderUser`, getOrderUser)

app.get(`/paginationUsers`, getPaginationUsers)

app.get(`/fullEndpoints`, getFullEndpoints)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});