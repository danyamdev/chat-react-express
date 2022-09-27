import React, { useState } from 'react';
import { Button, Input } from 'antd';
import {
  AudioOutlined,
  CameraOutlined,
  CheckCircleOutlined,
  SmileOutlined
} from "@ant-design/icons";

import './style.scss';

const ChatInput: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <Button type="link" shape="circle" icon={<SmileOutlined />} />
      </div>
      <Input
        onChange={e => setValue(e.target.value)}
        size="large"
        placeholder="Введите текст сообщения…"
      />
      <div className="chat-input__actions">
        <Button type="link" shape="circle" icon={<CameraOutlined />} />
        {value ? (
          <Button type="link" shape="circle" icon={<CheckCircleOutlined />} />
        ) : (
          <Button type="link" shape="circle" icon={<AudioOutlined />} />
        )}
      </div>
    </div>
  );
};

export default ChatInput;