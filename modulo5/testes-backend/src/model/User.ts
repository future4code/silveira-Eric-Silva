export enum ROLE {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}
export default class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: ROLE
  ) {}
}

export interface InputSignupDTO {
  name: string;
  email: string;
  password: string;
  role: ROLE;
}
export interface InputLoginDTO {
  email: string;
  password: string;
}
export interface InputSelectUserDTO {
  id: string;
  token: string | undefined;
}
export type FindByEmailResponse = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: ROLE;
}[];
export interface FindByIdResponse {
  id: string;
  name: string;
  email: string;
  role:ROLE
}
