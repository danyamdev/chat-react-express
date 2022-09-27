import React from 'react';
import { Button } from 'antd';
import {EllipsisOutlined, FormOutlined, TeamOutlined} from '@ant-design/icons';

import { Messages, Status, ChatInput } from 'components/index';
import { Dialogs } from 'containers/index';

import dialogsJSON from '../../dialogs.json';

import './style.scss'

const Home: React.FC = () => (
  <section className="home">
    <div className="chat">
      <div className="chat__sidebar">
        <div className="chat__sidebar-header">
          <div>
            <TeamOutlined />
            <span>Список диалогов</span>
          </div>
          <Button type="link" shape="circle" icon={<FormOutlined />}/>
        </div>

        <div className="chat__sidebar-dialogs">
          <Dialogs userId={0} items={dialogsJSON} />
        </div>
      </div>
      <div className="chat__dialog">
        <div className="chat__dialog-header">
          <div />
          <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">Гай Юлий Цезарь</b>
            <div className="chat__dialog-header-status">
              <Status online />
            </div>
          </div>
          <Button type="link" shape="circle" icon={<EllipsisOutlined />} />
        </div>
        <div className="chat__dialog-messages">
          <Messages />
        </div>
        <div className="chat__dialog-input">
          <ChatInput />
        </div>
      </div>
    </div>
    {/*<Message*/}
    {/*  avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"*/}
    {/*  text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"*/}
    {/*  date="Sun Apr 21 2019 21:55:29"*/}
    {/*  attachments={[*/}
    {/*    {*/}
    {/*      filename: "image.jpg",*/}
    {/*      url: "https://source.unsplash.com/100x100/?random=1&nature,water"*/}
    {/*    },*/}
    {/*    {*/}
    {/*      filename: "image.jpg",*/}
    {/*      url: "https://source.unsplash.com/100x100/?random=2&nature,water"*/}
    {/*    },*/}
    {/*    {*/}
    {/*      filename: "image.jpg",*/}
    {/*      url: "https://source.unsplash.com/100x100/?random=3&nature,water"*/}
    {/*    }*/}
    {/*  ]}*/}
    {/*/>*/}
    {/*<Message*/}
    {/*  avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"*/}
    {/*  text="Hello, World!"*/}
    {/*  date="Sun Apr 21 2019 21:59:29"*/}
    {/*  isMe={true}*/}
    {/*  isReaded={false}*/}
    {/*/>*/}
    {/*<Message*/}
    {/*  avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"*/}
    {/*  attachments={[*/}
    {/*    {*/}
    {/*      filename: "image.jpg",*/}
    {/*      url: "https://source.unsplash.com/100x100/?random=1&nature,water"*/}
    {/*    }*/}
    {/*  ]}*/}
    {/*/>*/}
    {/*<Message*/}
    {/*  avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"*/}
    {/*  isTyping*/}
    {/*/>*/}
  </section>
);

export default Home;