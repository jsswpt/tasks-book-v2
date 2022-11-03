import React, { createContext } from "react";

export type ModalContextProps = {
  isOpen: boolean;
  toggleIsOpen: (arg: boolean) => void;
  children: React.ReactNode | null;
  toggleChildren: (arg: React.ReactNode) => void;
};

export const ModalContext = createContext<ModalContextProps | null>(null);
