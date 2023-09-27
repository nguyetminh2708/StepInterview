import { Button, DatePicker, Form, Input } from 'antd';
import { CustomerModel } from '../types/customer';
import { createNewCustomer } from '../apis/customerAPIs';
import { insertItem } from '../utils/tableUtils';
import { ManageContext } from '../contexts/ManageContext';
import { useContext } from 'react';

export const CustomerForm = () => {
  const [formCustomer] = Form.useForm<CustomerModel>();
  const { customerData, setCustomerData, setDataTable } = useContext(ManageContext);

  const handleNewCustomer = async (value: CustomerModel) => {
    try {
      await formCustomer.validateFields();
      const result = await createNewCustomer(value);
      formCustomer.resetFields();
      const newData = insertItem(result, customerData?.items);
      setCustomerData({ totalRecords: customerData?.totalRecords + 1, items: newData });
      setDataTable({ totalRecords: customerData?.totalRecords + 1, items: newData });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="add-modal" form={formCustomer} name="basic" onFinish={handleNewCustomer}>
      <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'This field is required!' }]}>
        <Input id="fullName" />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{ required: true, message: 'This field is required!' }]}>
        <Input id="email" />
      </Form.Item>
      <Form.Item label="DoB" name="dob" rules={[{ required: true, message: 'This field is required!' }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item>
        <Button type="primary" className="btn-add-new-item" htmlType="submit">
          Add Customer
        </Button>
      </Form.Item>
    </Form>
  );
};
