import React from 'react';
import { Input, Empty } from 'antd';
import orderBy from 'lodash/orderBy';

import { DialogItem } from 'components/index';

import './style.scss';

type TDialogs = {
  items: any[];
  userId: any;
  onSearch: any;
  inputValue: any;
  currentDialogId: any;
  onSelectDialog: any;
}


const Dialogs: React.FC<TDialogs> = ({
  items,
  userId,
  onSearch,
  inputValue,
  currentDialogId,
  onSelectDialog
  }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Input.Search
        placeholder="Поиск среди контактов"
        onChange={e => onSearch(e.target.value)}
        value={inputValue}
      />
    </div>
    {items.length ? (
      orderBy(items, ["created_at"], ["desc"]).map(item => (
        <DialogItem
          onSelect={onSelectDialog}
          key={item._id}
          isMe={item.user._id === userId}
          currentDialogId={currentDialogId}
          {...item}
        />
      ))
    ) : (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Ничего не найдено"
      />
    )}
  </div>
);

export default Dialogs;