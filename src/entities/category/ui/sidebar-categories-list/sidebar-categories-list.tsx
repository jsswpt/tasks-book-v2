import { categoryModel } from "entities/category/";
import React, { useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { routes } from "shared/config/routes";
import { SidebarCategoriesItem } from "../sidebar-categories-item/sidebar-categories-item";

import st from "./styles.module.scss";

export const SidebarCategoriesList = React.memo(() => {
  const categories = categoryModel.state.categories;

  const { categoryid } = useParams();

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

  return (
    <ul className={st.list}>
      {categories.map((item) => (
        <SidebarCategoriesItem
          {...item}
          isActive={item.id === categoryid}
          key={item.id}
          onClick={onClick}
        />
      ))}
    </ul>
  );
});
