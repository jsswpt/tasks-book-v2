import { makeAutoObservable } from "mobx";

import { taskTypes, utilTypes } from "shared/api/types";
import { getRandomId } from "shared/lib/get-random-id/get-random-id";

class Task {
  baseTasks: taskTypes.Task[] = [
    {
      categoryId: "first-category",
      creationDate: new Date(),
      deadline: new Date(2022, 11, 10),
      description: "some description",
      id: "first",
      title: "Feed a cat",
      isDone: true,
    },
    {
      categoryId: "first-category",
      creationDate: new Date(),
      deadline: new Date(2022, 11, 10),
      description: "some description",
      id: "first2",
      title: "Feed a cat",
      isDone: false,
    },
    {
      categoryId: "first-category",
      creationDate: new Date(),
      deadline: new Date(2022, 11, 10),
      description: "some description",
      id: "first3",
      title: "Feed a cat",
      isDone: true,
    },
    {
      categoryId: "first-category",
      creationDate: new Date(),
      deadline: new Date(2022, 11, 10),
      description: "some description",
      id: "first4",
      title: "Feed a cat",
      isDone: false,
    },
  ];

  // как бы временный массив, используемый при наличии фильтров
  currentList: taskTypes.Task[] = [...this.baseTasks];

  currentCategory: string = "";

  filterFunctions: utilTypes.FilterFunctionType[] = [];

  constructor() {
    makeAutoObservable(this);

    this.toggleTaskState = this.toggleTaskState.bind(this);
    this.addFilterFunc = this.addFilterFunc.bind(this);
    this.removeFilterFunc = this.removeFilterFunc.bind(this);
    this.filterTasks = this.filterTasks.bind(this);
    this.setCurrentCategory = this.setCurrentCategory.bind(this);
  }

  setCurrentCategory(category: string) {
    this.currentCategory = category;
    this.filterTasks();
  }

  toggleTaskState(taskId: string) {
    this.baseTasks = this.baseTasks.map((item) =>
      item.id === taskId ? { ...item, isDone: !item.isDone } : item
    );

    this.filterTasks();
  }

  filterTasks() {
    // фильтр по категории
    this.currentList = this.baseTasks.filter(
      (item) => item.categoryId === this.currentCategory
    );

    this.currentList = this.currentList.filter((item) => {
      if (this.filterFunctions.length) {
        const isFitted = this.filterFunctions.map((func) => {
          return func.func(item);
        });

        if (!isFitted.includes(false)) {
          return item;
        }
        return;
      }
      return item;
    });
  }

  sortTasks() {}

  addFilterFunc(data: utilTypes.FilterFunctionType) {
    this.filterFunctions.push(data);
    this.filterTasks();
  }

  removeFilterFunc(id: string) {
    // пока что массив очищается полностью
    this.filterFunctions = [];
  }
}

export const taskModel = new Task();
