import { useSidebar } from "entities/sidebar-context/hooks/use-sidebar";
import React from "react";
import st from "./styles.module.scss";

export const Header = React.memo(() => {
  const sidebarContext = useSidebar();
  return (
    <header className={st.header}>
      <div className={st.container}>
        <div className={`${st.header_wrap} ${st.header_wrap__menu}`}>
          <button onClick={() => sidebarContext.toggleIsOpen(true)}>
            тут типа меню
          </button>
        </div>
        <div className={`${st.header_wrap} ${st.header_wrap__button}`}>
          тут типа кнопка
        </div>
        <div>тут типа аватар</div>
      </div>
    </header>
  );
});
