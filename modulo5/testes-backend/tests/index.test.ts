// Mocks desenvolvidos no coding together da aula!

import UserBusiness from "../src/business/UserBusiness"
import UserData from "../src/data/UserData"
import { Authenticator } from "../src/services/Authenticator"
import { HashManager } from "../src/services/HashManager"
import IdGenerator from "../src/services/IdGenerator"

const userBusinessMock = new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
)

describe("", () => {
   test("Should catch error when id is not registered", async () => {
    expect.assertions(2)

    try {
      await userBusinessMock.selectUser("abcdaids")
    } catch (error:any) {
      expect(error.statusCode).toBe(404)
      expect(error.message).toBe("User not found")
    }
  })
    
  test("Should return respective user when id is registered", async () => {
    const id = "38597c90-09f2-4687-8e61-c493af2ff047"
    try {
      const selectUser = jest.fn(
        (id: string) => userBusinessMock.selectUser(id)
      )
        
      const result = await selectUser(id)

      expect(selectUser).toHaveBeenCalledWith(id)
      expect(result).toEqual({
        id: "38597c90-09f2-4687-8e61-c493af2ff047",
        name: "Eric",
        email: "eric@gmail.com",
        password: "$2a$12$PeaYqwfb54akGeV1q7TWEOzcEM5PYbo6SD.54duGJYZkCsEZWzL1W",
        role: "ADMIN"
      })
    } catch (error:any) {
      console.log(error.message)
    }finally {
        expect.assertions(2)
    }
  })
})