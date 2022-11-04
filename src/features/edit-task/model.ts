import { categoryModel } from "entities/category";
import { useModal } from "entities/modal-context/hooks/useModal";
import { taskModel } from "entities/task/task";
import { useFormik } from "formik";
import { taskTypes } from "shared/api/types";

export const useEditTask = (taskid: string) => {
  const task = taskModel.getTask(taskid);
  const setTask = taskModel.setTask;

  const modal = useModal();

  const categories = categoryModel.categories;

  const close = () => {
    modal.toggleChildren(null);
    modal.toggleIsOpen(false);
  };

  const initialValues: taskTypes.Task = {
    categoryId: task.categoryId,
    creationDate: task.creationDate,
    deadline: task.deadline,
    description: task.description,
    title: task.title,
    id: task.id,
    isDone: task.isDone,
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      setTask(values);
      const timeout = setTimeout(() => {
        setSubmitting(false);
        clearTimeout(timeout);
      }, 2000);
    },
  });

  return { ...formik, categories, close };
};
