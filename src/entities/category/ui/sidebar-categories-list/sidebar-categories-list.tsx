import { categoryModel } from "entities/category/";
import React, { useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { routes } from "shared/config/routes";
import { SidebarCategoriesItem } from "../sidebar-categories-item/sidebar-categories-item";

import st from "./styles.module.scss";

import compose from "compose-function";
import { observer } from "mobx-react-lite";

const withHocs = compose(React.memo, observer);

export const SidebarCategoriesList = withHocs(() => {
  const categories = categoryModel.categories;

  const { categoryId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  const onClick = useCallback(
    (arg: string) => {
      if (
        location.pathname !==
        routes.privateRoutesForNavigation.CATEGORIES + arg
      ) {
        navigate(routes.privateRoutesForNavigation.CATEGORIES + arg);
      }
    },
    [location.pathname]
  );

  console.log("что-то новое");

  return (
    <ul className={st.list}>
      {categories.map((item) => (
        <SidebarCategoriesItem
          {...item}
          isActive={item.id === categoryId}
          key={item.id}
          onClick={onClick}
        />
      ))}
    </ul>
  );
});
