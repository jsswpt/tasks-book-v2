import { makeAutoObservable } from "mobx";
import { categoryTypes } from "shared/api/types";
import { getRandomId } from "shared/lib/get-random-id/get-random-id";

class Category {
  isLoading: boolean = false;
  isGetted: boolean = false;
  categories: categoryTypes.Category[] = [];

  constructor() {
    makeAutoObservable(this);

    this.createCategory = this.createCategory.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
  }

  createCategory(data: categoryTypes.CreateCategoryProps) {
    this.categories.push({ ...data, id: getRandomId() });
  }
  removeCategory(data: categoryTypes.RemoveCategoryProps) {
    this.categories = this.categories.filter((item) => item.id !== data.id);
  }
}

export const categoryModel = new Category();
