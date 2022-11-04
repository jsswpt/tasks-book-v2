import st from "./styles.module.scss";

type CaptionProps = {
  children?: React.ReactNode;
  className?: any;
};

export const Caption = (props: CaptionProps) => {
  return (
    <div className={st.caption + " " + props.className}>
      <p className={st.caption_inner}>{props.children}</p>
    </div>
  );
};
