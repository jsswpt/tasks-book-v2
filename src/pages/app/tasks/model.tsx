import { useEffect } from "react";
import { taskModel } from "entities/task/task";
import { useParams } from "react-router-dom";
import { useModal } from "entities/modal-context/hooks/useModal";
import { AddTask } from "features";

export const useTasksPage = () => {
  const { categoryId } = useParams();
  const tasks = taskModel;
  console.log("новые таски", tasks.currentList.length);

  const modalContext = useModal();

  useEffect(() => {
    tasks.setCurrentCategory(categoryId!);
    console.log("айди категории", tasks.currentCategory);
  }, [categoryId]);

  const toggleModal = () => {
    modalContext.toggleChildren(<AddTask />);
    modalContext.toggleIsOpen(true);
  };

  return { tasks, categoryId, toggleModal };
};
