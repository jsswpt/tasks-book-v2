import { taskModel } from "entities/task/task";

export const useToggleTaskState = () => {
  const toggleState = taskModel.toggleTaskState;

  return { toggleState };
};
