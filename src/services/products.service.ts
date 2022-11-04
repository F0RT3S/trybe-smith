import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/product.models';

export default class ProductService {
  public productModel = new ProductModel();

  async createProduct(product: IProduct): Promise<IProduct> {
    return this.productModel.createProduct(product);
  }
}
