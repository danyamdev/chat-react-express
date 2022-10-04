import { dialogsApi } from "utils/api";

import dialogsJSON from '../../dialogs.json';

const actions = {
  setDialogs: (items: any) => ({
    type: "DIALOGS:SET_ITEMS",
    payload: items
  }),
  setCurrentDialogId: (id: any) => ({
    type: "DIALOGS:SET_CURRENT_DIALOG_ID",
    payload: id
  }),
  fetchDialogs: () => (dispatch: any) => {
    // @ts-ignore
    // dialogsApi.getAll().then(({ data }) => {
      dispatch(actions.setDialogs(dialogsJSON));
    // });
  }
};

export default actions;