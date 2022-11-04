import { categoryModel } from "entities/category";
import { useModal } from "entities/modal-context/hooks/useModal";

export const useRemoveCategory = () => {
  const remove = categoryModel.removeCategory;

  const modal = useModal();

  const close = () => {
    modal.toggleChildren(null);
    modal.toggleIsOpen(false);
  };

  return { close, remove };
};
