import { useContext } from "react";
import { AlertContext } from "./alertLayout";

export const useAlert = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error("you must use it in AlertLayout");
  } else {
    return context;
  }
};
