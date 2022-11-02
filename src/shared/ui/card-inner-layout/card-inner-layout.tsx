import st from "./styles.module.scss";

type CardInnerLayoutProps = {
  children?: React.ReactNode;
  title?: string;
  extraEl?: React.ReactNode;
};

export const CardInnerLayout = (props: CardInnerLayoutProps) => {
  return (
    <div className={st.layout}>
      <div className={st.card_top}>
        <h3 className={st.card_title}>{props.title}</h3>
      </div>
      <div className={st.card_middle}>{props.children}</div>
    </div>
  );
};
