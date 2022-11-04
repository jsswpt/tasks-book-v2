import React, { useMemo } from "react";

import { Modal } from "shared/ui/modal/modal";
import { useSidebarWidget } from "./model";
import { Sidebar as SidebarUI } from "../../shared/ui/sidebar/sidebar";

import compose from "compose-function";

import st from "./styles.module.scss";
import { observer } from "mobx-react-lite";
import { IconButton } from "shared/ui/button/icon-button";
import { SidebarCategoriesItem } from "entities/category/ui/sidebar-categories-item/sidebar-categories-item";
import { SidebarBlockLayout } from "shared/ui/sidebar-block-layout/sidebar-block-layout";
import { Button } from "shared/ui/button/button";
import { BsBucket, BsPencil, BsPencilSquare, BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { routes } from "shared/config/routes";
import { useWindowWidth } from "shared/hooks/useWindowWidth";

const withHocs = compose(React.memo, observer);

export const Sidebar = withHocs(() => {
  const model = useSidebarWidget();
  const navigate = useNavigate();

  const el = useMemo(() => {
    return (
      <>
        <SidebarBlockLayout title="Категории">
          <div>
            <ul className={st.list}>
              {model.categories.map((item) => (
                <li className={st.item} key={item.id}>
                  <div className={st.action_wrap}>
                    <IconButton
                      size="small"
                      onClick={() => model.remove(item.id)}
                      color="danger"
                    >
                      <BsBucket />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="warning"
                      onClick={() => model.edit(item.id)}
                    >
                      <BsPencilSquare />
                    </IconButton>
                  </div>
                  <SidebarCategoriesItem
                    onClick={() =>
                      navigate(
                        routes.privateRoutesForNavigation.CATEGORIES + item.id
                      )
                    }
                    {...item}
                    isActive={item.id === model.categoryId}
                  />
                </li>
              ))}
              <li>
                <Button onClick={model.toggleAddCategory} icon={<BsPlus />}>
                  Добавить
                </Button>
              </li>
            </ul>
          </div>
        </SidebarBlockLayout>
        <SidebarBlockLayout title="Что-то ещё">Что-то ещё</SidebarBlockLayout>
      </>
    );
  }, [model]);

  const width = useWindowWidth();

  return width < 1000 ? (
    <Modal
      isOpen={model.context.isOpen}
      onClose={() => model.context.toggleIsOpen(false)}
    >
      <SidebarUI isOpen={model.context.isOpen}>{el}</SidebarUI>
    </Modal>
  ) : (
    <SidebarUI isOpen={true}>{el}</SidebarUI>
  );
});
