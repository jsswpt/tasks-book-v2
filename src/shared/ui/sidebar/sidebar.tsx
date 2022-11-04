import { useLocation, useNavigate } from "react-router-dom";
import { Logo } from "shared/assets/svgs/Logo";
import { routes } from "shared/config/routes";
import st from "./styles.module.scss";

type SidebarProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

export const Sidebar = (props: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateHome = () => {
    if (location.pathname !== routes.privateRoutesForNavigation.HOME) {
      navigate(routes.privateRoutesForNavigation.HOME);
    }
  };
  return (
    <div
      className={
        props.isOpen ? st.sidebar : `${st.sidebar} ${st.sidebar__hidden}`
      }
    >
      <div className={st.sidebar_block + " " + st.sidebar_block__top}>
        <div className={st.logo_wrap} onClick={navigateHome}>
          <Logo />
        </div>
      </div>
      <div className={st.sidebar_block + " " + st.sidebar_block__middle}>
        {props.children}
      </div>
    </div>
  );
};
