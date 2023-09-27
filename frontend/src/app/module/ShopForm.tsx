import { Button, Form, Input } from 'antd';
import { ShopModel, ShopRequest } from '../types/shop';
import { createNewShop } from '../apis/shopAPIs';
import { insertItem } from '../utils/tableUtils';
import { ManageContext } from '../contexts/ManageContext';
import { useContext } from 'react';

export const ShopForm = () => {
  const [formShop] = Form.useForm<ShopModel>();
  const { shopData, setShopData, setDataTable } = useContext(ManageContext);

  const handleNewShop = async (values: ShopRequest) => {
    try {
      await formShop.validateFields();
      const result = await createNewShop(values);
      formShop.resetFields();
      const newData = insertItem(result, shopData?.items);
      setShopData({ totalRecords: shopData?.totalRecords + 1, items: newData });
      setDataTable({ totalRecords: shopData?.totalRecords + 1, items: newData });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form className="add-modal" form={formShop} name="basic" onFinish={handleNewShop}>
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'This field is required!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Location" name="location" rules={[{ required: true, message: 'This field is required!' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" className="btn-add-new-item" htmlType="submit">
          Add Shop
        </Button>
      </Form.Item>
    </Form>
  );
};
