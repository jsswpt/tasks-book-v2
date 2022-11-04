import { observer } from "mobx-react-lite";

import { ToggleTaskState } from "features";
import { taskTypes } from "shared/api/types";

import st from "./styles.module.scss";
import { Caption } from "shared/ui/caption/caption";
import { getDate } from "shared/lib/get-date/get-date";

export const TaskCard = observer((props: taskTypes.Task) => {
  return (
    <div className={st.card}>
      <Caption className={st.deadline}>
        {getDate(props.deadline).dateAsString}
      </Caption>
      <Caption className={st.created}>
        {getDate(props.creationDate).dateAsString}
      </Caption>
      <div className={st.text}>
        <p className={st.title}>{props.title}</p>
        <div className={st.divider}></div>
        <p className={st.description}>{props.description}</p>
      </div>
      <ToggleTaskState taskId={props.id} value={props.isDone} />
    </div>
  );
});
