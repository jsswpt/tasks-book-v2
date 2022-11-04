import { categoryModel } from "entities/category";
import { useModal } from "entities/modal-context/hooks/useModal";
import { useState } from "react";

export const useEditCategory = (categoryid: string) => {
  const category = categoryModel.getCategory(categoryid);
  const setCategory = categoryModel.setCategory;

  const modal = useModal();

  const [title, setTitle] = useState(category.title);

  const setCategoryFunc = () => {
    setCategory({ ...category, title });
  };

  const close = () => {
    modal.toggleChildren(null);
    modal.toggleIsOpen(false);
  };

  return { title, setTitle, setCategoryFunc, close };
};
