import React from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { EllipsisOutlined, UserOutlined } from '@ant-design/icons';

import { Block, Button } from "components/index";

const LoginForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form name="login" className="login-form" onFinish={onFinish}>
          <Form.Item
            // validateStatus="success" hasFeedback
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
              size="large"
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              prefix={<EllipsisOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
              size="large"
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/register">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </div>
  )
};

export default LoginForm;