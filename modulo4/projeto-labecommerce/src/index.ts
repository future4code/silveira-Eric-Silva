import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import postUser from './endpoints/postUser';
import getUsers from './endpoints/getUsers';
import postProduct from './endpoints/postProduct';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post(`/users`, postUser)

app.get(`/users`, getUsers)

app.post(`/products`, postProduct)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});