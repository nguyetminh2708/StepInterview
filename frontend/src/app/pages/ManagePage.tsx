import { Table, Row, Radio, Input, Alert, Pagination } from 'antd';
import { useContext, useEffect, useState } from 'react';
import {
  TableType,
  SelectOptions,
  CustomerColumns,
  ProductColumns,
  ShopColumns,
  ValidateRecord,
} from '../common/manage';
import { CustomerForm } from '../module/CustomerForm';
import { StyleFilterOptions, StyleForm } from './ManagePage.styled';
import { ManageContext, ManageContextProvider } from '../contexts/ManageContext';
import { ShopForm } from '../module/ShopForm';
import { ProductForm } from '../module/ProductForm';
import { fetchAllProduct } from '../apis/productAPIs';

const { Search } = Input;

const tableOptions: SelectOptions<TableType>[] = [
  {
    label: 'Customer',
    value: 'Customer',
  },
  {
    label: 'Product',
    value: 'Product',
  },
  {
    label: 'Shop',
    value: 'Shop',
  },
  {
    label: 'CustomerOrderHistory',
    value: 'CustomerOrderHistory',
  },
];

export const ManagePageContent = () => {
  const {
    customerData,
    shopData,
    productData,
    setProductData,
    customerOrderHistoryData,
    dataTable,
    setDataTable,
    columnTable,
    setColumnTable,
  } = useContext(ManageContext);

  const [activeMetrics, setActiveMetrics] = useState<TableType>('Customer');
  const [validation, setValidation] = useState<number>(ValidateRecord.Customer);
  const [searchText, setSearchText] = useState<string>('');

  const handleChangeTab = (value) => {
    setActiveMetrics(value);
    setSearchText('');
    switch (value) {
      case 'Customer': {
        setDataTable(customerData);
        setColumnTable(CustomerColumns);
        setValidation(ValidateRecord.Customer);
        break;
      }
      case 'Product': {
        setDataTable(productData);
        setColumnTable(ProductColumns);
        setValidation(ValidateRecord.Product);
        break;
      }
      case 'Shop': {
        setDataTable(shopData);
        setColumnTable(ShopColumns);
        setValidation(ValidateRecord.Shop);
        break;
      }
      case 'CustomerOrderHistory': {
        setDataTable(customerOrderHistoryData);
        setColumnTable(CustomerColumns);
        break;
      }
    }
  };

  const onSearch = async (value, event) => {
    setSearchText(value);
    console.log('test', value);
    try {
      const result = await fetchAllProduct({
        pageSize: productData.pageSize,
        pageNumber: productData.pageNumber,
        search: value,
      });
      setProductData(result);
      setDataTable(result);
    } catch (error) {
      console.log(error);
    }
  };
  const onShowPaging = async (current, pageSize) => {
    console.log(current, pageSize);
    try {
      const result = await fetchAllProduct({
        pageSize: pageSize,
        pageNumber: current,
        search: searchText,
      });
      setProductData(result);
      setDataTable(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page-home page-container">
      <section className="section-container">
        <Row>
          <h1>ManagePage</h1>
        </Row>
        <Row>
          <StyleFilterOptions>
            <label className="heatmap-filter-label">Type</label>
            <Radio.Group
              options={tableOptions}
              onChange={({ target: { value } }) => handleChangeTab(value)}
              value={activeMetrics}
              optionType="button"
              buttonStyle="solid"
            />
          </StyleFilterOptions>
        </Row>
        <span>Total record: {dataTable?.totalRecords}</span>
        {dataTable?.totalRecords < validation && <Alert message={'dont have enough data!!!'} type="error" />}
        <StyleForm>
          {activeMetrics === 'Customer' && <CustomerForm />}
          {activeMetrics === 'Shop' && <ShopForm />}
          {activeMetrics === 'Product' && (
            <>
              <Search placeholder="search product here" onSearch={onSearch} />
              <ProductForm />
            </>
          )}
        </StyleForm>
        <Table dataSource={dataTable?.items} columns={columnTable} pagination={false} />
        {activeMetrics === 'Product' && (
          <Pagination showSizeChanger onChange={onShowPaging} defaultCurrent={1} total={dataTable?.totalRecords} />
        )}
      </section>
    </div>
  );
};

export const ManagePage = () => {
  return (
    <ManageContextProvider>
      <ManagePageContent />
    </ManageContextProvider>
  );
};
