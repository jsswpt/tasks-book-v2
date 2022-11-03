import { observer } from "mobx-react-lite";

import { useToggleTaskState } from "../model";

type ToggleTaskStateProps = {
  taskId: string;
  value: boolean;
};

export const ToggleTaskState = observer((props: ToggleTaskStateProps) => {
  const model = useToggleTaskState();
  return (
    <input
      checked={props.value}
      type="checkbox"
      onChange={() => {
        model.toggleState(props.taskId);
      }}
    />
  );
});
