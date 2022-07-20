import { ROLE } from "../../src/model/User"
import { AuthenticationData } from "../../src/services/Authenticator"

export class TokenGeneratorMock {
    public generateId = (input: AuthenticationData): string => {
        return "token"
    }

}