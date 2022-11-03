import { makeAutoObservable } from "mobx";

import { taskTypes } from "shared/api/types";

class Task {
  tasks: taskTypes.Task[] = [
    {
      categoryId: "first-category",
      creationDate: new Date(),
      deadline: new Date(2022, 11, 10),
      description: "some description",
      id: "first",
      title: "first task",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }
}

export const taskModel = new Task();
