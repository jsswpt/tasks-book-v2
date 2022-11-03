import { useEffect, useMemo, useRef } from "react";
import ReactDOM from "react-dom";

import st from "./styles.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  alignCenter?: boolean;
};

export const Modal = (props: ModalProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const el = useMemo(() => {
    const element = document.createElement("div");
    element.id = "modal_wrap";

    return element;
  }, []);

  useEffect(() => {
    if (props.isOpen) {
      document.body.appendChild(el);

      modalRef.current!.className = st.modal + " " + st.rising;

      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";

      modalRef.current!.className = st.modal + " " + st.hiding;

      const timeOut = setTimeout(() => {
        el.remove();
        clearTimeout(timeOut);
      }, 640);
    }

    if (props.alignCenter) {
      modalRef.current!.className =
        modalRef.current!.className + " " + st.align_center;
    }
  }, [props.isOpen]);

  return ReactDOM.createPortal(
    <div className={st.modal} ref={modalRef} onClick={props.onClose}>
      <div
        style={{ width: "fit-content" }}
        ref={childrenRef}
        onClick={(evt) => evt.stopPropagation()}
      >
        {props.children}
      </div>
    </div>,
    el
  );
};
