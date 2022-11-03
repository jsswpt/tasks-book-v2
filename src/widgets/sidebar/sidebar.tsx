import React, { useEffect, useRef, useState } from "react";
import { useSidebar } from "entities/sidebar-context/hooks/use-sidebar";
import { Modal } from "shared/ui/modal/modal";
import { SidebarCategoriesList } from "entities/category";

import { Sidebar as SidebarUI } from "../../shared/ui/sidebar/sidebar";
import { SidebarBlockLayout } from "shared/ui/sidebar-block-layout/sidebar-block-layout";

// анимацию при первой загрузке надо пофиксить

export const Sidebar = React.memo(() => {
  const [width, setWidth] = useState(window.innerWidth);

  const context = useSidebar();

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
          <SidebarCategoriesList />
        </SidebarBlockLayout>
        <SidebarBlockLayout title="Что-то ещё">Что-то ещё</SidebarBlockLayout>
      </SidebarUI>
    </Modal>
  ) : (
    <SidebarUI isOpen={true}>
      <SidebarBlockLayout title="Категории">
        <SidebarCategoriesList />
      </SidebarBlockLayout>
    </SidebarUI>
  );
});
