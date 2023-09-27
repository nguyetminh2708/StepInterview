import { CustomerModel, CustomerOrderHistoryModel, CustomerResponse } from '../types/customer';
import { fetchAsync } from '../utils/fetch';

export const fetchAllCustomer = (): Promise<CustomerResponse> => fetchAsync('/api/customer');
export const createNewCustomer = (customer: CustomerModel): Promise<CustomerModel> =>
  fetchAsync(`/api/customer`, {
    method: 'POST',
    body: customer,
  });

export const fetchAllCustomerOrderHistory = (): Promise<CustomerOrderHistoryModel[]> =>
  fetchAsync('/api/customer/all-orders');
