import React from 'react';
import classNames from 'classnames';

import { Time, IconReaded } from 'components/index';

import './style.scss';

type TMessage = {
  avatar: string;
  user?: any;
  text?: string;
  date?: string;
  attachments?: any;
  isMe?: boolean;
  isReaded?: boolean;
  isTyping?: boolean;
}

const Message: React.FC<TMessage> = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping,
}) => (
  <div className={classNames("message", {
    "message--isme": isMe,
    "message--is-typing": isTyping,
    "message--image": attachments && attachments.length === 1
  })}>
    <div className="message__content">
      {typeof isMe === 'boolean' && typeof isReaded === 'boolean' && (
        <IconReaded isMe={isMe} isReaded={isReaded} />
      )}
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user?.fullname}`} />
      </div>
      <div className="message__info">
        {(text || isTyping) && (
          <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        )}
        <div className="message__attachments">
          {attachments &&
          attachments.map((item: any) => (
            <div className="message__attachments-item">
              <img src={item?.url} alt={item?.filename} />
            </div>
          ))}
        </div>
        {date && (
          <span className="message__date">
            <Time date={date} />
          </span>
        )}
      </div>
    </div>
  </div>
);

export default Message;