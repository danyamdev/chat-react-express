import React, { useState } from 'react';
import { Button, Input } from 'antd';
import {
  AudioOutlined,
  CameraOutlined,
  CheckCircleOutlined,
  SmileOutlined
} from '@ant-design/icons';
// @ts-ignore
import { UploadField } from '@navjobs/upload';
import data from '@emoji-mart/data';
// @ts-ignore
import Picker from '@emoji-mart/react';

import './style.scss';

const ChatInput: React.FC = () => {
  const [value, setValue] = useState("");
  const [emojiPickerVisible, setShowEmojiPicker] = useState(false);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!emojiPickerVisible);
  };

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        {emojiPickerVisible && (
          <div className="chat-input__emoji-picker">
            <Picker data={data} onEmojiSelect={console.log} />
          </div>
        )}
        <Button
          onClick={toggleEmojiPicker}
          type="link"
          shape="circle"
          icon={<SmileOutlined />}
        />
      </div>
      <Input
        onChange={e => setValue(e.target.value)}
        size="large"
        placeholder="Введите текст сообщения…"
      />
      <div className="chat-input__actions">
        <UploadField
          onFiles={( files: any) => console.log(files)}
          containerProps={{
            className: "chat-input__actions-upload-btn"
          }}
          uploadProps={{
            accept: ".jpg,.jpeg,.png,.gif,.bmp",
            multiple: "multiple"
          }}
        >
          <Button type="link" shape="circle" icon={<CameraOutlined />} />
        </UploadField>
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