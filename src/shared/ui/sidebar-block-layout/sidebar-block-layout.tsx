import st from "./styles.module.scss";

type SidebarBlockLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export const SidebarBlockLayout = (props: SidebarBlockLayoutProps) => {
  return (
    <div className={st.layout}>
      <h2 className={st.title}>{props.title}</h2>
      {props.children}
    </div>
  );
};
