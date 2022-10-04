import { messagesApi } from "utils/api";

const actions = {
  setMessages: (items: any) => ({
    type: "MESSAGES:SET_ITEMS",
    payload: items
  }),
  setIsLoading: (bool: any) => ({
    type: "MESSAGES:SET_IS_LOADING",
    payload: bool
  }),
  fetchMessages: (dialogId: any) => (dispatch: any) => {
    dispatch(actions.setIsLoading(true));
    // @ts-ignore
    messagesApi
      .getAllByDialogId(dialogId)
      .then(({ data }) => {
        dispatch(actions.setMessages(data));
      })
      .catch(() => {
        dispatch(actions.setIsLoading(false));
      });
  }
};

export default actions;