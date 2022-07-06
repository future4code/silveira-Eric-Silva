import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { createPostDTO } from "../types/createPostDTO";
import { SelectPostDTO } from "../types/selectPostDTO";

export default class PostController {
  constructor(
    private postBusiness: PostBusiness
    ){}
  createPost = async (req: Request, res: Response) => {
    const { photo, description, type } = req.body;
    const token = req.headers.authorization as string;
    const input: createPostDTO = {
      photo,
      description,
      type,
      token,
    };
    try {
      await this.postBusiness.createPost(input);
      res.status(201).send({ message: "post created successfully"});
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("error in createPost");
    }
  };
  selectPost = async (req:Request, res:Response)=>{
    const id = req.params.id
    const token = req.headers.authorization as string
    const input: SelectPostDTO = {
      id,
      token
    }
    
    try {
      const post = await this.postBusiness.selectPost(input)
      res.status(200).send(post)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("error in createPost");
    }
}
}
