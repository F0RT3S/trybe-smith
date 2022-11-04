import { IAllProducts } from '../interfaces/IAllProducts';
import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/product.models';

export default class ProductService {
  public productModel = new ProductModel();

  async createProduct(product: IProduct): Promise<IProduct> {
    return this.productModel.createProduct(product);
  }

  async getAllProduct(): Promise<IAllProducts[]> {
    return this.productModel.getAllProduct();
  }
}
