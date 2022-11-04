import { categoryModel } from "entities/category";
import { useModal } from "entities/modal-context/hooks/useModal";
import { useSidebar } from "entities/sidebar-context/hooks/use-sidebar";
import { AddCategory, EditCategory, RemoveCategory } from "features";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useSidebarWidget = () => {
  const context = useSidebar();
  const modalContext = useModal();

  const categories = categoryModel.categories;

  const toggleAddCategory = () => {
    modalContext.toggleChildren(<AddCategory />);
    modalContext.toggleIsOpen(true);
  };

  const { categoryId } = useParams();

  const remove = (categoryid: string) => {
    modalContext.toggleChildren(<RemoveCategory categoryid={categoryid} />);
    modalContext.toggleIsOpen(true);
  };

  const edit = (categoryid: string) => {
    modalContext.toggleChildren(<EditCategory categoryid={categoryid} />);
    modalContext.toggleIsOpen(true);
  };

  return {
    categoryId,
    toggleAddCategory,
    categories,
    modalContext,
    context,
    remove,
    edit,
  };
};
