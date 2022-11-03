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

  currentList: taskTypes.Task[] = [...this.baseTasks];

  currentCategory: string = "";
  filterFunctions: utilTypes.FilterFunctionType[] = [];

  isFiltred: boolean = false;

  constructor() {
    makeAutoObservable(this);

    this.toggleTaskState = this.toggleTaskState.bind(this);
    this.addFilterFunc = this.addFilterFunc.bind(this);
    this.removeFilterFunc = this.removeFilterFunc.bind(this);
    this.filterTasks = this.filterTasks.bind(this);
    this.onAction = this.onAction.bind(this);
    this.setCurrentCategory = this.setCurrentCategory.bind(this);
  }

  onAction() {
    if (this.filterFunctions.length) {
      this.isFiltred = true;
    } else {
      this.isFiltred = false;
    }
  }

  setCurrentCategory(category: string) {
    this.currentCategory = category;
  }

  toggleTaskState(taskId: string) {
    this.onAction();
    this.baseTasks = this.baseTasks.map((item) =>
      item.id === taskId ? { ...item, isDone: !item.isDone } : item
    );

    this.filterTasks();
  }

  filterTasks() {
    this.onAction();

    this.currentList = this.baseTasks.filter(
      (item) => item.categoryId === this.currentCategory
    );

    this.currentList = this.baseTasks.filter((item) => {
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
    this.onAction();
    this.filterFunctions.push(data);
    this.filterTasks();
  }

  removeFilterFunc(id: string) {
    this.filterFunctions = [];

    console.log(this.filterFunctions.length);
  }
}

export const taskModel = new Task();
