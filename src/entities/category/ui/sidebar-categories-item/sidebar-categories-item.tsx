import { categoryTypes } from "shared/api/types";
import st from "./styles.module.scss";

interface SidebarCategoriesItemProps extends categoryTypes.Category {
  isActive: boolean;
  onClick?: (id: string) => void;
}

export const SidebarCategoriesItem = (props: SidebarCategoriesItemProps) => {
  return (
    <li
      className={props.isActive ? st.item + " " + st.item__active : st.item}
      onClick={() => {
        if (props.onClick) {
          props.onClick(props.id);
        }
      }}
    >
      <p className={st.item_title}>{props.title}</p>
    </li>
  );
};
