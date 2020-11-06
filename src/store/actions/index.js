export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const GET_FROM_STORAGE = "GET_FROM_STORAGE";
export const SET_STORAGE = "SET_STORAGE";

export const addItemAC = (item) => {
  return { type: ADD, payload: item };
};

export const removeItemAC = (id) => {
  return { type: REMOVE, payload: id };
};

export const getFromStorage = () => {
  return { type: GET_FROM_STORAGE };
};

export const setStorage = () => {
  return { type: SET_STORAGE };
};
