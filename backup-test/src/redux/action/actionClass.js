import {
  SET_ADD_CLASS_MODAL,
  SET_EDIT_CLASS_MODAL,
  SET_VIEW_CLASS_MODAL,
  SET_VIEW_STUDENT_IN_CLASS,
} from "../type";

const activeAddClassModal = (payload) => ({
  type: SET_ADD_CLASS_MODAL,
  payload,
});

const activeEditClassModal = (payload) => ({
  type: SET_EDIT_CLASS_MODAL,
  payload,
});

const activeViewClassModal = (payload) => ({
  type: SET_VIEW_CLASS_MODAL,
  payload,
});

const activeViewStudentClass = (payload) => ({
  type: SET_VIEW_STUDENT_IN_CLASS,
  payload,
});

const exportDefault = {
  activeAddClassModal,
  activeEditClassModal,
  activeViewClassModal,
  activeViewStudentClass,
};

export default exportDefault;
