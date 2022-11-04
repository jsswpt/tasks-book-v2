import { Outlet } from "react-router-dom";

import st from "./styles.module.scss";
import { Header, Sidebar } from "widgets";
import { useModal } from "entities/modal-context/hooks/useModal";
import { Modal } from "shared/ui/modal/modal";

export const App = () => {
  const modalContext = useModal();

  return (
    <div className={st.app}>
      <Modal
        alignCenter
        children={modalContext.children ? modalContext.children : <></>}
        isOpen={modalContext.isOpen}
        onClose={() => {
          modalContext.toggleChildren(null);
          modalContext.toggleIsOpen(false);
        }}
      />
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
