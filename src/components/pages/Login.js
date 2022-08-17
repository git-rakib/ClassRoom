import React from 'react'
import 'antd/dist/antd.min.css'
import '../css/input.css'
import { Button, Checkbox, Form, Input } from 'antd';
import LoginBG from '../../assets/img/login_bg.jpg'
import Navbar from '../Navbar';


function login() {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className=' w-full mx-auto h-screen flex items-center bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${LoginBG})`}}>
      <div className='container'>
      <Navbar />
       <div className='w-[450px] mx-auto bg-white px-14 py-[60px] rounded-3xl shadow-md'>
       <div className='mb-6'>
       <h1 className='text-[22px] font-bold mb-0'>Welcome Back!</h1>
        <span>login to continue</span>
       </div>
          <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            className="custom_input"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            className="custom_input"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            className="custom_checkbox"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
          className="custom_login__btn"
          >
            <Button htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
       </div>
      </div>
    </div>
  )
}

export default login