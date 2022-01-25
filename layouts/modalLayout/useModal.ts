import { ModalContext } from "./modalLayout";
import { useContext } from "react";

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("you must use it in ModalLayout");
  } else {
    return context;
  }
};
