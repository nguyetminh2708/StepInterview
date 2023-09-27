import { ProductModel, ProductRequest, ProductResponse } from '../types/product';
import { fetchAsync } from '../utils/fetch';

//export const fetchAllProduct = (): Promise<ProductModel[]> => fetchAsync('/api/product');
export const createNewProduct = (product: ProductModel): Promise<ProductModel> =>
  fetchAsync(`/api/product`, {
    method: 'POST',
    body: product,
  });
export const fetchAllProduct = (query: ProductRequest): Promise<ProductResponse> =>
  fetchAsync(`/api/product/get-data`, {
    method: 'POST',
    body: query,
  });
