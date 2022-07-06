import { TYPE } from "../model/Post";

export type FindByIdResponse = {
  id: string;
  photo: string;
  description: string;
  creation_date: string;
  type: TYPE;
  user_id: string;
};
