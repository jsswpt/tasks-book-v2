import { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

import st from "./styles.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

export const Modal = (props: ModalProps) => {
  const el = useMemo(() => {
    const element = document.createElement("div");
    element.id = "modal_wrap";
    element.className = st.modal;

    return element;
  }, []);

  useEffect(() => {
    if (props.isOpen) {
      document.body.appendChild(el);

      el.className = st.modal + " " + st.rising;

      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
      el.className = st.modal + " " + st.hiding;

      const timeOut = setTimeout(() => {
        el.remove();
        clearTimeout(timeOut);
      }, 640);
    }
  }, [props.isOpen]);

  return ReactDOM.createPortal(props.children, el);
};
