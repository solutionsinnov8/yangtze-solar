"use client";
import { Form, Input, Select, Checkbox, Button } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import React from 'react';

const { Option } = Select;

const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    toast.success('Form submitted successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    form.resetFields();
  };

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      <div className="max-w-[1440px] mx-2 md:mx-[50px]">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 text-base mb-6">
          If you have any questions, please fill in the following blanks so that we can serve you better (those with "*" are required).
        </p>
        <Form
          name="contact_form"
          form={form}
          onFinish={onFinish}
          layout="vertical"
          className="p-6 rounded-none"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Form.Item
              name="name"
              label="Name *"
              rules={[{ required: true, message: 'Please input your name!' }]}
              className="mb-0"
            >
              <Input placeholder="Your Name" className="w-full rounded-none" />
            </Form.Item>
            <Form.Item
              name="mobile"
              label="Mobile/WhatsApp *"
              rules={[{ required: true, message: 'Please input your mobile/WhatsApp!' }]}
              className="mb-0"
            >
              <Input placeholder="Your Mobile/WhatsApp" className="w-full rounded-none" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email *"
              rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
              className="mb-0"
            >
              <Input placeholder="Your Email" className="w-full rounded-none" />
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Form.Item
              name="country"
              label="Country or Region *"
              rules={[{ required: true, message: 'Please select your country!' }]}
              className="mb-0"
            >
              <Input placeholder="Your Country/Region" className="w-full rounded-none" />
            </Form.Item>
            <Form.Item
              name="city"
              label="City *"
              rules={[{ required: true, message: 'Please input your city!' }]}
              className="mb-0"
            >
              <Input placeholder="Your City" className="w-full rounded-none" />
            </Form.Item>
            <Form.Item
              name="requirement"
              label="Requirement *"
              rules={[{ required: true, message: 'Please select your requirement!' }]}
              className="mb-0"
            >
              <Select placeholder="Please Select" className="w-full rounded-none">
                <Option value="Government & Utility Cooperation">Government & Utility Cooperation</Option>
                <Option value="Commercial & Industrial Cooperation">Commercial & Industrial Cooperation</Option>
                <Option value="Channel & Distribution Cooperation">Channel & Distribution Cooperation</Option>
                <Option value="Need Technical Support">Need Technical Support</Option>
                <Option value="After-sales Feedback">After-sales Feedback</Option>
              </Select>
            </Form.Item>
          </div>
          <Form.Item
            name="company"
            label="Your Company Name *"
            rules={[{ required: true, message: 'Please input your company name!' }]}
            className="mb-0"
          >
            <Input placeholder="Your Company Name" className="w-full rounded-none" />
          </Form.Item>
          <Form.Item
            name="message"
            label="Message *"
            rules={[{ required: true, message: 'Please input your message!' }]}
            className="mb-0"
          >
            <Input.TextArea placeholder="Your Message" className="w-full rounded-none" rows={4} />
          </Form.Item>
          <Form.Item name="newsletter" valuePropName="checked" className="mb-0">
            <Checkbox>Subscribe to Guangxi Solar Newsletter</Checkbox>
          </Form.Item>
          <Form.Item className="mb-0">
            <p className="text-gray-600 text-sm mb-2">
              * By clicking submit, I agree to Guangxi Solar's <span className='text-[#18AD5E]'>Privacy Policy</span> and <span className='text-[#18AD5E]'>Terms of Use</span>.
            </p>
            <Button
              htmlType="submit"
              className="!bg-green-600 !text-white py-2 !rounded-none !hover:bg-green-700 w-[160px] flex justify-between"
            >
              <span>Submit</span> <span className="ml-2">→</span>
            </Button>
          </Form.Item>
        </Form>

        {/* New Contact Information Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <div className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
              <FaEnvelope className="text-[#18AD5E] text-2xl mr-4 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">sales@guangxisolar.com</p>
                <p className="text-gray-600">support@guangxisolar.com</p>
                <p className="text-gray-600">hr@guangxisolar.com</p>
              </div>
            </div>
            {/* <div className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
              <FaPhoneAlt className="text-[#18AD5E] text-2xl mr-4 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+1 (800) 123-4567</p>
              </div>
            </div> */}
            <div className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
              <FaMapMarkerAlt className="text-[#18AD5E] text-2xl mr-4 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Location</h4>
                <p className="text-gray-600">No. 238-A, Shuguang Road, Xingning District, Guangxi, China</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;