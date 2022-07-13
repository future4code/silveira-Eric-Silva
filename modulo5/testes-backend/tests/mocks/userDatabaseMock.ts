
import User, { InputSelectUserDTO } from "../../src/model/User"
import { userAdminMock, userMock } from "./UserMock"



export class UserDatabaseMock {
    public async insert(user: User): Promise<void> {

    }

    public async getUserByEmail(email: string): Promise<User | undefined> {
        switch(email) {
            case "user1@gmail.com":
                return userMock
            case "user1@gmail.com":
                return userAdminMock
            default: 
                return undefined
        }
    }

    public async selectUser(input: InputSelectUserDTO ): Promise<User | undefined> {
        console.log(input)
        switch(input.id) {
            case "id_user_1":
                return userMock
            case "id_user_2":
                return userAdminMock
            default: 
                return undefined
        }
    }

    public async getAllUsers(): Promise<User[]> {
        return [userMock, userAdminMock]
    }
}