import { createContext } from "react";

export type SidebarContextProps = {
  isOpen: boolean;
  toggleIsOpen: (arg: boolean) => void;
};

export const SidebarContext = createContext<SidebarContextProps | null>(null);
