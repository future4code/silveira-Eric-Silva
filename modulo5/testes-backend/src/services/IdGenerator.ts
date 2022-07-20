import {v4} from "uuid";
import { ROLE } from "../model/User";

export default class IdGenerator {

     generateId(): string{
	return v4();
    }

}