import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';

import readedSvg from 'assets/img/readed.svg';
import noReadedSvg from 'assets/img/noreaded.svg';

import './style.scss';

type TMessage = {
  avatar: string;
  user?: any;
  text: string;
  date: string;
  isMe?: boolean;
  isReaded?: boolean;
  attachments?: any;
}

const Message: React.FC<TMessage> = ({ avatar, user, text, date, isMe, isReaded, attachments }) => (
  <div className={`message ${isMe ? "message--isme" : ''}`}>
    <div className="message__content">
      {isMe && isReaded ? (
        <img
          className="message__icon-readed"
          src={readedSvg}
          alt="Readed icon"
        />
      ) : (
        <img
          className="message__icon-readed message__icon-readed--no"
          src={noReadedSvg}
          alt="No readed icon"
        />
      )}
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user?.fullname}`} />
      </div>
      <div className="message__info">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        <div className="message__attachments">
          {attachments &&
          attachments.map((item: any) => (
            <div className="message__attachments-item">
              <img src={item?.url} alt={item?.filename} />
            </div>
          ))}
        </div>
        <span className="message__date">
          {formatDistanceToNow(new Date(date), { addSuffix: true, locale: ruLocale })}
        </span>
      </div>
    </div>
  </div>
);

export default Message;