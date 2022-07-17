import { SET_ADD_CLASS_MODAL } from "../type";

const activeAddClassModal = (payload) => ({
  type: SET_ADD_CLASS_MODAL,
  payload,
});

const exportDefault = {
  activeAddClassModal,
};

export default exportDefault;
