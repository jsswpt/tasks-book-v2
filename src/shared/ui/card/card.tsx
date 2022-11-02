import st from "./styles.module.scss";

type CardProps = {
  children?: React.ReactNode;
};

export const Card = (props: CardProps) => {
  return <div className={st.card}>{props.children}</div>;
};
