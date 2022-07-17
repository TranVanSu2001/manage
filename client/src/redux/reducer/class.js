import {
  SET_ADD_CLASS_MODAL,
  SET_EDIT_CLASS_MODAL,
  SET_VIEW_CLASS_MODAL,
} from "../type";

const initialState = {
  activeAddModal: false,
  activeEditModal: false,
  activeViewModal: false,
};

const classReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ADD_CLASS_MODAL:
      return {
        ...state,
        activeAddModal: payload,
      };

    case SET_EDIT_CLASS_MODAL:
      return {
        ...state,
        activeEditModal: payload,
      };

    case SET_VIEW_CLASS_MODAL:
      return {
        ...state,
        activeViewModal: payload,
      };

    default:
      return state;
  }
};

export default classReducer;
