export const ADD = "ADD";
export const REMOVE = "REMOVE";

export const addItemAC = (item) => {
  return { type: ADD, payload: item };
};

export const removeItemAC = (id) => {
  return { type: REMOVE, payload: id };
};
