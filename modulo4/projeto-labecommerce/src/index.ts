import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import getUsers from './endpoints/getUsers';
import postProduct from './endpoints/postProducts';
import postUsers from './endpoints/postUsers';
import getProducts from './endpoints/getProducts';
import postPurchases from './endpoints/postPurchases';
import getPurchases from './endpoints/getPurchases';

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post(`/users`, postUsers)

app.get(`/users`, getUsers)

app.post(`/products`, postProduct)

app.get(`/products`, getProducts)

app.post(`/purchases`, postPurchases)

app.get(`/users/:user_id/purchases`, getPurchases)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});