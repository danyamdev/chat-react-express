import React from 'react';
import { Empty, Spin } from 'antd';
import classNames from 'classnames';

import { Message } from 'components/index';

type TMessages = {
  blockRef: any;
  isLoading: boolean
  items?: any[];
}

const Messages: React.FC<TMessages> = ({ blockRef, isLoading, items }) => {
  return (
    <div
      ref={blockRef}
      className={classNames("messages", { "messages--loading": isLoading })}
    >
      {isLoading ? (
        <Spin size="large" tip="Загрузка сообщений..." />
      ) : items && !isLoading ? (
        items?.length > 0 ? (
          items.map(item => <Message key={item._id} {...item} />)
        ) : (
          <Empty description="Диалог пуст" />
        )
      ) : (
        <Empty description="Откройте диалог" />
      )}
    </div>
  )
  // return !items ? (
  //   <div>
  //     <Message
  //       avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
  //       date="Sun Apr 21 2019 21:55:29"
  //       audio="https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3"
  //     />
  //     <Message
  //       avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
  //       text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
  //       date="Sun Apr 21 2019 21:55:29"
  //       attachments={[
  //         {
  //           filename: "image.jpg",
  //           url: "https://source.unsplash.com/100x100/?random=1&nature,water"
  //         },
  //         {
  //           filename: "image.jpg",
  //           url: "https://source.unsplash.com/100x100/?random=2&nature,water"
  //         },
  //         {
  //           filename: "image.jpg",
  //           url: "https://source.unsplash.com/100x100/?random=3&nature,water"
  //         }
  //       ]}
  //     />
  //     <Message
  //       avatar="https://sun1-89.userapi.com/c850424/v850424867/f6869/B-F_i2BilOA.jpg?ava=1"
  //       text="Hello, World!"
  //       date="Sun Apr 21 2019 21:59:29"
  //       isMe={true}
  //       isReaded={false}
  //     />
  //     <Message
  //       avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
  //       attachments={[
  //         {
  //           filename: "image.jpg",
  //           url: "https://source.unsplash.com/100x100/?random=1&nature,water"
  //         }
  //       ]}
  //     />
  //     <Message
  //       avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
  //       text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
  //       date="Sun Apr 21 2019 21:55:29"
  //     />
  //     <Message
  //       avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
  //       text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
  //       date="Sun Apr 21 2019 21:55:29"
  //     />
  //     <Message
  //       avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
  //       text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
  //       date="Sun Apr 21 2019 21:55:29"
  //     />
  //     <Message
  //       avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
  //       text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
  //       date="Sun Apr 21 2019 21:55:29"
  //     />
  //     <Message
  //       avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
  //       text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
  //       date="Sun Apr 21 2019 21:55:29"
  //     />
  //     <Message
  //       avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
  //       text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
  //       date="Sun Apr 21 2019 21:55:29"
  //     />
  //     <Message
  //       avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
  //       text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
  //       date="Sun Apr 21 2019 21:55:29"
  //     />
  //     <Message
  //       avatar="https://pp.userapi.com/c846017/v846017841/18957c/1iVH9FKXi4E.jpg?ava=1"
  //       text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
  //       date="Sun Apr 21 2019 21:55:29"
  //     />
  //   </div>
  // ) : (
  //   <Empty description="Откройте диалог" />
  // );
};

export default Messages;