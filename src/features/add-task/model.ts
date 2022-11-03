import { useFormik } from "formik";
import { useState } from "react";
import { taskTypes } from "shared/api/types";

type InitialValues = taskTypes.CreateTaskProps;

const initialValues: InitialValues = {
  categoryId: "",
  creationDate: new Date(),
  deadline: new Date(),
  description: "",
  isDone: false,
  title: "",
};

export const useAddTask = () => {
  const formik = useFormik({ initialValues, onSubmit: () => {} });
  return { ...formik };
};
