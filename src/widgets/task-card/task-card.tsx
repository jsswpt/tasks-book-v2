import { observer } from "mobx-react-lite";

import { ToggleTaskState } from "features";
import { taskTypes } from "shared/api/types";

import st from "./styles.module.scss";

export const TaskCard = observer((props: taskTypes.Task) => {
  return (
    <div className={st.card}>
      <div className={st.caption + " " + st.deadline}>
        <p className={st.caption_inner}>21.05.2002</p>
      </div>
      <div className={st.caption + " " + st.created}>
        <p className={st.caption_inner}>21.05.2002</p>
      </div>
      <div className={st.text}>
        <p className={st.title}>{props.title}</p>
        <div className={st.divider}></div>
        <p className={st.description}>{props.description}</p>
      </div>
      <ToggleTaskState taskId={props.id} value={props.isDone} />
    </div>
  );
});
