import { useReducer } from "react";

type InitialStateType = {
  isModalOpen: boolean;
  modalContent: JSX.Element | null;
};

const initialState: InitialStateType = {
  isModalOpen: false,
  modalContent: null,
};

const actions = {
  openModal: (modalContent: JSX.Element) =>
    ({
      type: "open",
      payload: modalContent,
    } as const),

  closeModal: () =>
    ({
      type: "close",
    } as const),
};

type InferValuesTypes<T> = T extends { [key: string]: infer U } ? U : never;
type ActionTypes = ReturnType<InferValuesTypes<typeof actions>>;

const modalReducer = (state: typeof initialState, action: ActionTypes) => {
  switch (action.type) {
    case "open":
      return {
        ...state,
        ...{ isModalOpen: true, modalContent: action.payload },
      };
    case "close":
      return { ...state, ...{ isModalOpen: false, modalContent: null } };
    default:
      throw new Error();
  }
};

export const useContextModalData = (): {
  modalElement: JSX.Element | null;
  value: {
    isOpenModal: boolean;
    openModal: (content: JSX.Element) => void;
    closeModal: () => void;
  };
} => {
  const [state, dispatch] = useReducer(modalReducer, initialState);
  const openModal = (content: JSX.Element) => {
    dispatch(actions.openModal(content));
  };
  const closeModal = () => {
    dispatch(actions.closeModal());
  };
  return {
    modalElement: state.modalContent,
    value: {
      isOpenModal: state.isModalOpen,
      openModal,
      closeModal,
    },
  };
};
export type ContextValueType = {
  isOpenModal: boolean;
  openModal: (content: JSX.Element) => void;
  closeModal: () => void;
};
