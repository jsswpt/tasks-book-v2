import { Outlet } from "react-router-dom";

import st from "./styles.module.scss";
import { Header, Sidebar } from "widgets";

export const App = () => {
  return (
    <div className={st.app}>
      <Sidebar />
      <div className={st.app_content_wrap}>
        <Header />

        <main className={st.main}>
          <div className={st.container}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
