import { categoryModel } from "entities/category";
import { useModal } from "entities/modal-context/hooks/useModal";
import { useFormik } from "formik";
import { useState } from "react";
import { categoryTypes } from "shared/api/types";

export const useAddCategory = () => {
  const createCategory = categoryModel.createCategory;

  const modalContext = useModal();

  const close = () => {
    modalContext.toggleIsOpen(false);
    modalContext.toggleChildren(null);
  };

  const formik = useFormik({
    initialValues: { title: "" },
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      createCategory({ title: values.title });

      const timeout = setTimeout(() => {
        setSubmitting(false);
        clearTimeout(timeout);
      }, 2000);
    },
  });
  return { ...formik, close };
};
