import { Entity } from './entity';

export interface ShopModel extends Entity {
  name: string;
  location: string;
}
export interface ShopRequest {
  name: string;
  location: string;
}
export interface ShopResponse {
  totalRecords: number;
  items: ShopModel[];
}
