import { observer } from "mobx-react-lite";

import { EditTask, RemoveTask, ToggleTaskState } from "features";
import { taskTypes } from "shared/api/types";

import st from "./styles.module.scss";
import { Caption } from "shared/ui/caption/caption";
import { getDate } from "shared/lib/get-date/get-date";

import { BsBucket, BsPencilSquare } from "react-icons/bs";
import { IconButton } from "shared/ui/button/icon-button";
import { useModal } from "entities/modal-context/hooks/useModal";

export const TaskCard = observer((props: taskTypes.Task) => {
  const modalContext = useModal();

  const editTask = () => {
    modalContext.toggleChildren(<EditTask taskid={props.id} />);
    modalContext.toggleIsOpen(true);
  };

  const removeTask = () => {
    modalContext.toggleChildren(<RemoveTask taskid={props.id} />);
    modalContext.toggleIsOpen(true);
  };
  return (
    <div className={st.card}>
      <Caption className={st.deadline}>
        {getDate(props.deadline).dateAsString}
      </Caption>
      <Caption className={st.created}>
        {getDate(props.creationDate).dateAsString}
      </Caption>
      <ToggleTaskState taskId={props.id} value={props.isDone} />
      <div className={st.text}>
        <p className={st.title}>{props.title}</p>
        <div className={st.divider}></div>
        <p className={st.description}>{props.description}</p>
      </div>
      <div className={st.actions_wrap}>
        <IconButton onClick={editTask}>
          <BsPencilSquare />
        </IconButton>
        <IconButton color="danger" onClick={removeTask}>
          <BsBucket />
        </IconButton>
      </div>
    </div>
  );
});
