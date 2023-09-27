import { Entity } from './entity';

export interface CustomerModel extends Entity {
  fullName: string;
  email: string;
  dob: Date;
}

export interface CustomerOrderHistoryModel {
  customerId: number;
  productId: number;
}

export interface CustomerResponse {
  totalRecords: number;
  items: CustomerModel[];
}
