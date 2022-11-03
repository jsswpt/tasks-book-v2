import React, { useEffect, useRef } from "react";
import { useSidebar } from "entities/sidebar-context/hooks/use-sidebar";
import { Modal } from "shared/ui/modal/modal";
import st from "./styles.module.scss";

// анимацию при первой загрузке надо пофиксить

export const Sidebar = React.memo(() => {
  const context = useSidebar();

  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className={st.sidebar__xs}>
        <Modal
          isOpen={context.isOpen}
          onClose={() => context.toggleIsOpen(false)}
        >
          <div
            ref={sidebarRef}
            className={
              context.isOpen
                ? st.sidebar
                : `${st.sidebar} ${st.sidebar__hidden}`
            }
          >
            sidebar
          </div>
        </Modal>
      </div>
      <div className={st.sidebar__xl}>
        <div
          className={
            context.isOpen ? st.sidebar : `${st.sidebar} ${st.sidebar__hidden}`
          }
          onClick={() => context.toggleIsOpen(false)}
        >
          sidebar
        </div>
      </div>
    </div>
  );
});
