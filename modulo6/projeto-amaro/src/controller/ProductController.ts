import { Request, Response } from "express";
import productBusiness, { ProductBusiness } from "../business/ProductBusiness";
import { inputCreateProductDTO } from "../model/Product";

export class ProductController {
  constructor(
    private productBusiness: ProductBusiness
    ) {}
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
}

export default new ProductController(productBusiness)