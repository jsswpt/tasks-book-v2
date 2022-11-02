import { Outlet } from "react-router-dom";
import { Tasks } from "./tasks/tasks";

import st from "./styles.module.scss";

export const App = () => {
  return (
    <div className={st.app}>
      <div>sidebar tipa</div>
      <div>Header tipa</div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
