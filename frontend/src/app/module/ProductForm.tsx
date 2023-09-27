import { Button, DatePicker, Form, Input, Select } from 'antd';
import { ManageContext } from '../contexts/ManageContext';
import { useContext } from 'react';
import { ProductModel } from '../types/product';
import { createNewProduct } from '../apis/productAPIs';
import { insertItem } from '../utils/tableUtils';

export const ProductForm = () => {
  const [formProduct] = Form.useForm<ProductModel>();
  const { productData, setProductData, shopData, setDataTable } = useContext(ManageContext);

  const handleNewProduct = async (value: ProductModel) => {
    try {
      await formProduct.validateFields();
      const result = await createNewProduct(value);
      formProduct.resetFields();
      const newData = insertItem(result, productData?.items);
      setProductData({ ...productData, totalRecords: productData?.totalRecords + 1, items: newData });
      console.log('test', newData);
      setDataTable({ totalRecords: productData?.totalRecords + 1, items: newData });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form className="add-modal" form={formProduct} name="basic" onFinish={handleNewProduct}>
      <Form.Item label="Product Name" name="name" rules={[{ required: true, message: 'This field is required!' }]}>
        <Input id="product-name" />
      </Form.Item>
      <Form.Item label="Image" name="imageUrl" rules={[{ required: true, message: 'This field is required!' }]}>
        <Input id="imageUrl" />
      </Form.Item>
      <Form.Item label="Price" name="price" rules={[{ required: true, message: 'This field is required!' }]}>
        <Input id="price" />
      </Form.Item>
      <Form.Item label="Shop" name="shopId" rules={[{ required: true, message: 'This field is required!' }]}>
        <Select options={shopData?.items?.map((item) => ({ label: item.name, value: item.id }))} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" className="btn-add-new-item" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
  );
};
