import { useSidebar } from "entities/sidebar-context/hooks/use-sidebar";
import React from "react";

import { BsList } from "react-icons/bs";
import { IconButton } from "shared/ui/button/icon-button";
import { Button } from "shared/ui/button/button";

import { BsPlusCircle } from "react-icons/bs";

import st from "./styles.module.scss";
import { useModal } from "entities/modal-context/hooks/useModal";
import { AddTask } from "features";

export const Header = React.memo(() => {
  const sidebarContext = useSidebar();

  const modalContext = useModal();
  return (
    <header className={st.header}>
      <div className={st.container}>
        <div className={`${st.header_wrap} ${st.header_wrap__menu}`}>
          <IconButton
            size="large"
            onClick={() => sidebarContext.toggleIsOpen(true)}
          >
            <BsList />
          </IconButton>
        </div>
        <div className={`${st.header_wrap} ${st.header_wrap__button}`}>
          <Button
            icon={<BsPlusCircle />}
            onClick={() => {
              modalContext.toggleIsOpen(true);
              modalContext.toggleChildren(<AddTask />);
            }}
          >
            Новая задача
          </Button>
        </div>
        <div>тут типа аватар</div>
      </div>
    </header>
  );
});
