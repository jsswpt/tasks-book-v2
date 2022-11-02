import { useSidebarState } from "entities/sidebar-context/hooks/use-sidebar-state";
import { SidebarContext } from "entities/sidebar-context/sidebar-context";

export const withSidebar = (component: () => React.ReactNode) => () => {
  const initialState = useSidebarState();
  return (
    <SidebarContext.Provider value={initialState}>
      {component()}
    </SidebarContext.Provider>
  );
};
