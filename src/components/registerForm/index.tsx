import React, {useState} from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import {
  InfoCircleOutlined,
  LockOutlined,
  MailOutlined,
  UserOutlined
} from "@ant-design/icons";

import { Block, Button } from 'components/index';

const RegisterForm: React.FC = () => {
  const [success, setSuccess] = useState<boolean>(false);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    setSuccess(true);
  };

  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form name="register" className="login-form" onFinish={onFinish}>
            <Form.Item
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
                prefix={<LockOutlined style={{color: 'rgba(0,0,0,.25)'}}/>}
                size="large"
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            {/*<Form.Item>*/}
            {/*  <Input*/}
            {/*    // prefix={*/}
            {/*    //   <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />*/}
            {/*    // }*/}
            {/*    size="large"*/}
            {/*    type="password"*/}
            {/*    placeholder="Повторите пароль"*/}
            {/*  />*/}
            {/*</Form.Item>*/}
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <InfoCircleOutlined/>
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;