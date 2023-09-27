import { Entity } from './entity';
import { ShopModel } from './shop';

export interface ProductModel extends Entity {
  name: string;
  imageUrl: string;
  price: number;
  shop: ShopModel;
  shopId: number;
}

export interface ProductRequest {
  pageNumber: number;
  pageSize: number;
  search: string;
}

export interface ProductResponse {
  pageNumber: number;
  pageSize: number;
  search: string;
  totalPages: number;
  totalRecords: number;
  items: ProductModel[];
}
