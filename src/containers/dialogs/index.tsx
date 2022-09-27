import React, { useState } from 'react';
import { Dialogs as BaseDialogs } from 'components/index';

type TDialogs = {
  items: any;
  userId: any;
}

const Dialogs: React.FC<TDialogs> = ({ items, userId }) => {
  const [inputValue, setValue] = useState("");
  const [filtred, setFiltredItems] = useState(Array.from(items));

  const onChangeInput = (value: any) => {
    setFiltredItems(
      items.filter(
        (dialog: any) =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setValue(value);
  };

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
    />
  );
};

export default Dialogs;