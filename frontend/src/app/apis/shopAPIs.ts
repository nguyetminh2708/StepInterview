import { ShopModel, ShopRequest, ShopResponse } from '../types/shop';
import { fetchAsync } from '../utils/fetch';

export const fetchAllShop = (): Promise<ShopResponse> => fetchAsync('/api/shop');
export const createNewShop = (shop: ShopRequest): Promise<ShopModel> =>
  fetchAsync(`/api/shop`, {
    method: 'POST',
    body: shop,
  });
