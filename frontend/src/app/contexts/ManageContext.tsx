import { PropsWithChildren, createContext, useEffect, useMemo, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { CustomerModel, CustomerOrderHistoryModel, CustomerResponse } from '../types/customer';
import { fetchAllCustomer, fetchAllCustomerOrderHistory } from '../apis/customerAPIs';
import { fetchAllShop } from '../apis/shopAPIs';
import { fetchAllProduct } from '../apis/productAPIs';
import { ShopModel, ShopRequest, ShopResponse } from '../types/shop';
import { ProductResponse } from '../types/product';
import { CustomerColumns } from '../common/manage';

interface IManageContext {
  customerData: CustomerResponse;
  setCustomerData: (customers: CustomerResponse) => void;
  shopData: ShopResponse;
  setShopData: (shop: ShopResponse) => void;
  productData: ProductResponse;
  setProductData: (product: ProductResponse) => void;
  customerOrderHistoryData: CustomerOrderHistoryModel[];
  dataTable: any;
  setDataTable: (data: any) => void;
  columnTable: any;
  setColumnTable: (data: any) => void;
}

export const ManageContext = createContext<IManageContext>({} as IManageContext);

export const ManageContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const { data: customers } = useFetch(fetchAllCustomer);
  const { data: shops } = useFetch(fetchAllShop);
  const { data: products } = useFetch(() => fetchAllProduct({ pageSize: 20, pageNumber: 1, search: '' }));
  const { data: customerOrderHistoryData } = useFetch(fetchAllCustomerOrderHistory);

  const [customerData, setCustomerData] = useState<CustomerResponse>();
  const [shopData, setShopData] = useState<ShopResponse>();
  const [productData, setProductData] = useState<ProductResponse>();

  const [dataTable, setDataTable] = useState<any>();
  const [columnTable, setColumnTable] = useState<any>();

  useMemo(() => {
    setDataTable(customerData);
    setColumnTable(CustomerColumns);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customers]);

  useEffect(() => {
    setCustomerData(customers);
  }, [customers]);

  useEffect(() => {
    setShopData(shops);
  }, [shops]);

  useEffect(() => {
    setProductData(products);
  }, [products]);

  return (
    <ManageContext.Provider
      value={{
        customerData,
        setCustomerData,
        shopData,
        setShopData,
        productData,
        setProductData,
        customerOrderHistoryData,
        dataTable,
        setDataTable,
        columnTable,
        setColumnTable,
      }}
    >
      {children}
    </ManageContext.Provider>
  );
};
