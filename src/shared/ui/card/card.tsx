import classNames from "classnames";
import st from "./styles.module.scss";

type CardProps = {
  children?: React.ReactNode;
  className?: any;
};

export const Card = (props: CardProps) => {
  return (
    <div
      className={classNames(st.card, props.className ? props.className : "")}
    >
      {props.children}
    </div>
  );
};
