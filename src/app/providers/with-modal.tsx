import { useModalState } from "entities/modal-context/hooks/use-modal-state";
import { ModalContext } from "entities/modal-context/modal-context";
import React from "react";

export const withModal = (component: () => React.ReactNode) => () => {
  const state = useModalState();
  return (
    <ModalContext.Provider value={state}>{component()}</ModalContext.Provider>
  );
};
