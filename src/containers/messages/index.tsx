import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { Messages as BaseMessages } from 'components';

import { messagesActions } from 'redux/actions';

type TDialogs = {
  items: any;
  isLoading: boolean;
  fetchMessages: any;
  currentDialogId: any;
}

const Dialogs: React.FC<TDialogs> = ({ currentDialogId, fetchMessages, items, isLoading }) => {
  const messagesRef = useRef(null);

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId]);

  useEffect(() => {
    // @ts-ignore
    messagesRef.current.scrollTo(0, 999999);
  }, [items]);

  return (
    <BaseMessages blockRef={messagesRef} items={items} isLoading={isLoading} />
  );
};

// todo: ref
export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading
  }),
  messagesActions
)(Dialogs);