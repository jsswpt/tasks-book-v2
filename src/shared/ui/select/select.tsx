import React from "react";

import classNames from "classnames";
import { SelectHTMLAttributes, OptionHTMLAttributes } from "react";
import { Caption } from "../caption/caption";

import st from "./styles.module.scss";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  mySize?: "large" | "medium" | "small";
  caption?: string;
}

export const Select = React.memo((props: SelectProps) => {
  return (
    <div className={st.select_wrap}>
      {props.caption && <Caption>{props.caption}</Caption>}
      <select
        {...props}
        className={classNames(st.select, {
          [st.large]: props.mySize === "large",
          [st.medium]: props.mySize === "medium" || !props.mySize,
          [st.small]: props.mySize === "small",
        })}
      >
        {props.children}
      </select>
    </div>
  );
});
