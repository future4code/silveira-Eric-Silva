import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
<<<<<<< HEAD
import postUser from './endpoints/postUser';
=======
import postUsers from './endpoints/postUsers';
>>>>>>> d4f08ba26e6bb2ee5fa54512ae18f4360ef30977

const app: Express = express();

app.use(express.json());
app.use(cors());

<<<<<<< HEAD
app.post(`/users`, postUser)
=======
app.post(`/users`, postUsers)
>>>>>>> d4f08ba26e6bb2ee5fa54512ae18f4360ef30977

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});