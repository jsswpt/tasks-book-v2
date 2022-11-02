import { useSidebar } from "entities/sidebar-context/hooks/use-sidebar";
import React from "react";
import { Modal } from "shared/ui/modal/modal";
import st from "./styles.module.scss";

// анимацию при первой загрузке надо пофиксить

export const Sidebar = React.memo(() => {
  const context = useSidebar();

  return (
    <div>
      <div className={st.sidebar__xs}>
        <Modal isOpen={context.isOpen}>
          <div
            className={
              context.isOpen
                ? st.sidebar
                : `${st.sidebar} ${st.sidebar__hidden}`
            }
            onClick={() => context.toggleIsOpen(false)}
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
