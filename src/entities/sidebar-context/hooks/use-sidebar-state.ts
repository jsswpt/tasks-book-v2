// используется только при инициализации

import { useState } from "react";
import { SidebarContextProps } from "../sidebar-context";

export const useSidebarState = (): SidebarContextProps => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = (arg: boolean) => {
    setIsOpen(arg);
  };

  return { isOpen, toggleIsOpen };
};
