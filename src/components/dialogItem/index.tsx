import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

import { Avatar, IconReaded } from 'components/index';

const getMessageTime = (created_at: number | Date) => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm");
  } else {
    return format(created_at, 'dd.mm.yyyy');
  }
};

type TDialogItem = {
  user: any;
  message?: any;
  undread: number;
  created_at: any;
  text: string;
  isMe: boolean;
}

const DialogItem: React.FC<TDialogItem> = ({ user, undread, created_at, text, isMe  }) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": user.isOnline
    })}
  >
    <div className="dialogs__item-avatar">
      <Avatar user={user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user?.fullname}</b>
        <span>{getMessageTime(new Date(created_at))}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>
        {isMe && <IconReaded isMe={true} isReaded={false} />}
        {undread > 0 && (
          <div className="dialogs__item-info-bottom-count">
            {undread > 9 ? "+9" : undread}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;