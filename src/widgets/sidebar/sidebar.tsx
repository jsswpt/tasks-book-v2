import React, { useEffect, useRef, useState } from "react";
import { useSidebar } from "entities/sidebar-context/hooks/use-sidebar";
import { Modal } from "shared/ui/modal/modal";
import { SidebarCategoriesList } from "entities/category";

import { Sidebar as SidebarUI } from "../../shared/ui/sidebar/sidebar";
import { SidebarBlockLayout } from "shared/ui/sidebar-block-layout/sidebar-block-layout";
import { AddCategory } from "features";
import { Button } from "shared/ui/button/button";
import { useModal } from "entities/modal-context/hooks/useModal";
import { BsPlus } from "react-icons/bs";

import compose from "compose-function";
import { observer } from "mobx-react-lite";

const withHocs = compose(React.memo, observer);

export const Sidebar = withHocs(() => {
  const [width, setWidth] = useState(window.innerWidth);

  const context = useSidebar();
  const modalContext = useModal();

  const toggleAddCategory = () => {
    modalContext.toggleChildren(<AddCategory />);
    modalContext.toggleIsOpen(true);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  return width < 1000 ? (
    <Modal isOpen={context.isOpen} onClose={() => context.toggleIsOpen(false)}>
      <SidebarUI isOpen={context.isOpen}>
        <SidebarBlockLayout title="Категории">
          <div>
            <SidebarCategoriesList />
            <Button onClick={toggleAddCategory} icon={<BsPlus />}>
              Добавить
            </Button>
          </div>
        </SidebarBlockLayout>
        <SidebarBlockLayout title="Что-то ещё">Что-то ещё</SidebarBlockLayout>
      </SidebarUI>
    </Modal>
  ) : (
    <SidebarUI isOpen={true}>
      <SidebarBlockLayout title="Категории">
        <div>
          <SidebarCategoriesList />
          <Button onClick={toggleAddCategory} icon={<BsPlus />}>
            Добавить
          </Button>
        </div>
      </SidebarBlockLayout>
    </SidebarUI>
  );
});
