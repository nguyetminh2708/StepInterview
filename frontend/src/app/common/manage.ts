export type TableType = 'Customer' | 'Product' | 'Shop' | 'CustomerOrderHistory';

export interface SelectOptions<T = string> {
  value: T;
  label: string;
}

export const CustomerColumns = [
  {
    title: 'Name',
    dataIndex: 'fullName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sort: (a, b) => a.name - b.name,
  },
  {
    title: 'DOB',
    dataIndex: 'dob',
  },
];
export const ShopColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    sort: (a, b) => a.location - b.location,
  },
];
export const ProductColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Image',
    dataIndex: 'imageUrl',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sort: (a, b) => a.price - b.price,
  },
];

export const ValidateRecord = {
  Customer: 30,
  Product: 32768,
  Shop: 3,
};
