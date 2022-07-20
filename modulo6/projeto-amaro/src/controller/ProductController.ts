import { Request, Response } from "express";
import productBusiness, { ProductBusiness } from "../business/ProductBusiness";
import {
  inputCreateProductDTO,
  InputSelectProductDTO,
  TAG,
} from "../model/Product";

export class ProductController {
  constructor(private productBusiness: ProductBusiness) {}
  createProduct = async (req: Request, res: Response) => {
    const input: inputCreateProductDTO = {
      name: req.body.name,
      price: req.body.price,
      photo: req.body.photo,
      description: req.body.description,
      tag: req.body.tag,
    };
    try {
      await this.productBusiness.createProduct(input);
      res.status(201).send({ message: "Produto adicionado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ error: error.message });
    }
  };
  selectProduct = async (req: Request, res: Response) => {
    const input: InputSelectProductDTO = {
      id: (req.query.id as string) || "",
      name: (req.query.name as string) || "",
      tag: (req.query.tag as TAG) || "",
    };
    try {
      const product = await this.productBusiness.selectProduct(input);
      res.status(200).send(product);
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ error: error.message });
    }
  };
}

export default new ProductController(productBusiness);
