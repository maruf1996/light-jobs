import { decodedToken } from "@/Helpers/utils/jwt";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "@/Helpers/utils/saveData";

export const storeUserInfo = (accessToken) => {
  return setToLocalStorage("accessToken", accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage("accessToken");
  // console.log(authToken);
  if (authToken) {
    return decodedToken(authToken);
  } else {
    return null;
  }
};
getUserInfo();

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage("accessToken");
  return !!authToken;
};

export const removeUserInfo = (key) => {
  return localStorage.removeItem(key);
};

export const getUserToken = () => {
  const authToken = getFromLocalStorage("accessToken");
  if (authToken) {
    return authToken;
  } else {
    return "";
  }
};
