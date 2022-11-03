import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import st from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "danger" | "warning" | "success" | "inherit";
  size?: "small" | "medium" | "large";
  variant?: "contained" | "outlined" | "default";
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={classNames(st.button, {
        [st.fullWidth]: props.fullWidth,

        [st.bg_primary]:
          props.variant === "contained" &&
          (props.color === "primary" || !props.color),
        [st.bg_danger]:
          props.variant === "contained" && props.color === "danger",
        [st.bg_warning]:
          props.variant === "contained" && props.color === "warning",
        [st.bg_success]:
          props.variant === "contained" && props.color === "success",
        [st.bg_inherit]:
          props.variant === "contained" && props.color === "inherit",

        [st.color_primary]:
          props.variant !== "contained" &&
          (props.color === "primary" || !props.color),
        [st.color_danger]:
          props.variant !== "contained" && props.color === "danger",
        [st.color_warning]:
          props.variant !== "contained" && props.color === "warning",
        [st.color_success]:
          props.variant !== "contained" && props.color === "success",
        [st.color_inherit]:
          props.variant !== "contained" && props.color === "inherit",

        [st.border_primary]:
          props.variant === "outlined" &&
          (props.color === "primary" || !props.color),
        [st.border_danger]:
          props.variant !== "outlined" && props.color === "danger",
        [st.border_warning]:
          props.variant !== "outlined" && props.color === "warning",
        [st.border_success]:
          props.variant !== "outlined" && props.color === "success",
        [st.border_inherit]:
          props.variant !== "outlined" && props.color === "inherit",

        [st.large]: props.size === "large",
        [st.medium]: props.size === "medium" || !props.size,
        [st.small]: props.size === "small",
      })}
      {...props}
    >
      <div className={st.button_inner}>
        {props.icon && <div className={st.icon}>{props.icon}</div>}
        {props.children}
      </div>
    </button>
  );
};
