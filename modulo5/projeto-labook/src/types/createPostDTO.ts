import { TYPE } from "../model/Post";

export type createPostDTO = {
  photo: string;
  description: string;
  type: TYPE;
  token: string;
};
