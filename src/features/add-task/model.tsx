import { useModal } from "entities/modal-context/hooks/useModal";
import { taskModel } from "entities/task/task";
import { AddCategory } from "features/add-category/ui/add-category";
import { useFormik } from "formik";
import { useState } from "react";
import { taskTypes } from "shared/api/types";

type InitialValues = taskTypes.CreateTaskProps;

const initialValues: InitialValues = {
  categoryId: "",
  creationDate: new Date(),
  deadline: new Date(),
  description: "",
  title: "",
};

export const useAddTask = () => {
  const addTask = taskModel.addTask;

  const modal = useModal();

  const close = () => {
    modal.toggleChildren(null);
    modal.toggleIsOpen(false);
  };

  const addCategory = () => {
    modal.toggleChildren(<AddCategory />);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      addTask({
        ...values,
        deadline: new Date(values.deadline),
        creationDate: new Date(values.creationDate),
      });
      const timeout = setTimeout(() => {
        setSubmitting(false);
        clearTimeout(timeout);
      }, 2000);
    },
  });

  return { ...formik, close, addCategory };
};
