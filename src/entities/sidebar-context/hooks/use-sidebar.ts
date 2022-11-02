import { useContext } from "react";
import { SidebarContext } from "../sidebar-context";

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (context) {
    return context;
  }
  throw new Error("Sidebar context couldn't be used outside of context");
};
