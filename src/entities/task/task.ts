import { makeAutoObservable } from "mobx";

import { taskTypes, utilTypes } from "shared/api/types";
import { getRandomId } from "shared/lib/get-random-id/get-random-id";

class Task {
  baseTasks: taskTypes.Task[] = [];

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
    this.addTask = this.addTask.bind(this);
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

  addTask(data: taskTypes.CreateTaskProps) {
    this.baseTasks.push({ ...data, isDone: false, id: getRandomId() });
    this.filterTasks();
  }
}

export const taskModel = new Task();
