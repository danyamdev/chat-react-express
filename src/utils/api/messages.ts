import { axios } from 'core';

export default {
  getAllByDialogId: (id: any) => axios.get("/messages?dialog=" + id)
};