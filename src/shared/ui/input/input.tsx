import React from "react";

import classNames from "classnames";
import { InputHTMLAttributes } from "react";
import { Caption } from "../caption/caption";

import st from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  caption?: string;
  helperText?: string;
  variant?: "outlined" | "default";
  mySize?: "small" | "medium" | "large";
}

export const Input = React.memo((props: InputProps) => {
  return (
    <div
      className={classNames(st.input_container, {
        [st.fullWidth]: props.fullWidth,
      })}
    >
      <div
        className={classNames(st.input_wrap, {
          [st.fullWidth]: props.fullWidth,
        })}
      >
        {props.caption && <Caption>{props.caption}</Caption>}
        <input
          {...props}
          className={classNames(st.input, {
            [st.outlined]: props.variant === "outlined",
            [st.default]: props.variant === "default" || !props.variant,

            [st.large]: props.mySize === "large",
            [st.medium]: props.mySize === "medium" || !props.variant,
            [st.small]: props.mySize === "small",
            [st.fullWidth]: props.fullWidth,
          })}
        />
      </div>

      {props.helperText && (
        <div className={st.helper_wrap}>
          <p className={st.helper}>{props.helperText}</p>
        </div>
      )}
    </div>
  );
});
