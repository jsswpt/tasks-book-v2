import classNames from "classnames";
import { OptionHTMLAttributes } from "react";

import st from "./styles.module.scss";

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  mySize?: "large" | "medium" | "small";
}

export const Option = (props: OptionProps) => {
  return (
    <option
      {...props}
      className={classNames(st.option, {
        [st.large]: props.mySize === "large",
        [st.medium]: props.mySize === "medium" || !props.mySize,
        [st.small]: props.mySize === "small",
      })}
    >
      {props.children}
    </option>
  );
};
