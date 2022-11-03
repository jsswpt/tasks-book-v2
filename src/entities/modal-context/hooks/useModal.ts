import { useContext } from "react";
import { ModalContext } from "../modal-context";

export const useModal = () => {
  const context = useContext(ModalContext);

  if (context) {
    return context;
  } else {
    throw new Error("Modal context couldn't be used outside of modal context");
  }
};
