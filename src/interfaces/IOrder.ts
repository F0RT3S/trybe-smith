export interface IOrder {
  id?: number;
  userId: number;
}

export interface IRegister {
  id?: number;
  user?: string;
  userId?: number;
  productsIds: number[];
}