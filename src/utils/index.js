import { store } from "../redux/store";

export const isUserActive = () => {
  return store.getState().user.userInfo.payload?.token;
};
