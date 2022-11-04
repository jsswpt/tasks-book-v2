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
    this.getTask = this.getTask.bind(this);
    this.setTask = this.setTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
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
    console.log("Добавляю", data);
    this.baseTasks.push({ ...data, isDone: false, id: getRandomId() });
    this.filterTasks();
  }

  setTask(data: taskTypes.Task) {
    this.baseTasks = this.baseTasks.map((item) => {
      if (item.id === data.id) {
        return data;
      } else {
        return item;
      }
    });

    this.filterTasks();
  }

  getTask(taskid: string) {
    return this.currentList.find((item) => item.id === taskid)!;
  }

  removeTask(taskid: string) {
    this.baseTasks = this.baseTasks.filter((item) => item.id !== taskid);

    this.filterTasks();
  }
}

export const taskModel = new Task();
