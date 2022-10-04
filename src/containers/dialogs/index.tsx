import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Dialogs as BaseDialogs } from 'components/index';

import { dialogsActions } from 'redux/actions';

type TDialogs = {
  items?: any;
  userId: any;
  fetchDialogs?: any;
  currentDialogId?: any;
  setCurrentDialogId?: any;
}

const Dialogs: React.FC<TDialogs> = ({
    items,
    userId,
    fetchDialogs,
    currentDialogId,
    setCurrentDialogId
  }) => {
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

  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFiltredItems(items);
    }
  }, [items]);

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialogId={currentDialogId}
    />
  );
};

// TODO: ref
export default connect(
  ({ dialogs }) => dialogs,
  dialogsActions
)(Dialogs);