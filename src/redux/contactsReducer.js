import { GET_CONTACTS } from "./types";

const initialState = {
  contacts: {},
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
};
