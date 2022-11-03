import { makeAutoObservable } from "mobx";
import { categoryTypes } from "shared/api/types";
import { getRandomId } from "shared/lib/get-random-id/get-random-id";

class Category {
  isLoading: boolean = false;
  isGetted: boolean = false;
  categories: categoryTypes.Category[] = [
    { id: "123213", title: "Pervaya" },
    { id: "1232132", title: "Vtoraya" },
    { id: "1232133", title: "Tretya" },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  createCategory(data: categoryTypes.CreateCategoryProps) {
    this.categories.push({ ...data, id: getRandomId() });
  }
  removeCategory(data: categoryTypes.RemoveCategoryProps) {
    this.categories = this.categories.filter((item) => item.id !== data.id);
  }
}

const { categories, createCategory, isGetted, isLoading, removeCategory } =
  new Category();

const actions = {
  createCategory,
  removeCategory,
};

const state = {
  categories,
  isGetted,
  isLoading,
};

export const categoryModel = {
  actions,
  state,
};
