import { Request, Response } from "express";
import productBusiness, { ProductBusiness } from "../business/ProductBusiness";



export class ProductController {
  constructor(private productBusiness: ProductBusiness) {}
  createProduct = async (req: Request, res: Response) => {
    const input = {
      name: req.body.name,
      tags: req.body.tags
    };
    try {
      await this.productBusiness.createProduct(input);
      res.status(201).send({ message: "Produto adicionado com sucesso" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ error: error.message });
    }
  };
  selectProduct = async (req: Request, res: Response) => {
    const input = {
      id: (req.query.id as string) || "",
      name: (req.query.name as string) || "",
      tags: (req.body.tags as string[]) || [],
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
