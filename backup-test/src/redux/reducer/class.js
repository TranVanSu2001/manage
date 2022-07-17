import { SET_ADD_CLASS_MODAL } from "../type";

const initialState = {
  activeAddModal: false,
};

const classReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ADD_CLASS_MODAL:
      return {
        ...state,
        activeAddModal: payload,
      };

    default:
      return state;
  }
};

export default classReducer;
