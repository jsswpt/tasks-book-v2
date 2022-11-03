import { Logo } from "shared/assets/svgs/Logo";
import st from "./styles.module.scss";

type SidebarProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

export const Sidebar = (props: SidebarProps) => {
  return (
    <div
      className={
        props.isOpen ? st.sidebar : `${st.sidebar} ${st.sidebar__hidden}`
      }
    >
      <div className={st.sidebar_block + " " + st.sidebar_block__top}>
        <div className={st.inner}>
          <Logo />
        </div>
      </div>
      <div className={st.sidebar_block + " " + st.sidebar_block__middle}>
        {props.children}
      </div>
    </div>
  );
};
