import React from "react";
import classNames from "classnames";
import { TextareaHTMLAttributes } from "react";

import st from "./styles.module.scss";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  fullWidth?: boolean;
}

export const TextArea = React.memo((props: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className={classNames(st.textArea, {
        [st.fullWidth]: props.fullWidth,
      })}
    ></textarea>
  );
});
