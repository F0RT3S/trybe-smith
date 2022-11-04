import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductController {
  public productService = new ProductService();

  async createProduct(req:Request, res:Response) {
    const product = req.body;

    const productCreated = await this.productService.createProduct(product);
    res.status(201).json(productCreated);
  }
}
