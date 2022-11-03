import React, { useState } from "react";
import { ModalContextProps } from "../modal-context";

export const useModalState = (): ModalContextProps => {
  const [isOpen, setIsOpen] = useState(false);
  const [children, setChildren] = useState<React.ReactNode | null>(null);

  const toggleIsOpen = (arg: boolean) => {
    setIsOpen(arg);
  };

  const toggleChildren = (arg: React.ReactNode) => {
    setChildren(arg);
  };

  return { isOpen, toggleIsOpen, children, toggleChildren };
};
