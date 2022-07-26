import {
  SET_ADD_STUDENT_MODAL,
  SET_EDIT_STUDENT_MODAL,
  SET_VIEW_STUDENT_MODAL,
} from "../type";

const activeAddStudentModal = (payload) => ({
  type: SET_ADD_STUDENT_MODAL,
  payload,
});

const activeEditStudentModal = (payload) => ({
  type: SET_EDIT_STUDENT_MODAL,
  payload,
});

const activeViewStudentModal = (payload) => ({
  type: SET_VIEW_STUDENT_MODAL,
  payload,
});

const exportDefault = {
  activeAddStudentModal,
  activeEditStudentModal,
  activeViewStudentModal,
};

export default exportDefault;
