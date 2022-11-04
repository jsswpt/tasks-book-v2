import { useModal } from "entities/modal-context/hooks/useModal";
import { taskModel } from "entities/task/task";

export const useRemoveTask = () => {
  const removeTask = taskModel.removeTask;

  const modalContext = useModal();

  const close = () => {
    modalContext.toggleChildren(null);
    modalContext.toggleIsOpen(false);
  };

  return { removeTask, close };
};
