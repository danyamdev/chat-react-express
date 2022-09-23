import React from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { LockOutlined, MailOutlined } from '@ant-design/icons';

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
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input
              id="email"
              prefix={<MailOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
              size="large"
              placeholder="E-Mail"
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
              prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
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