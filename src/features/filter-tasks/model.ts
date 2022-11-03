import { taskModel } from "entities/task/task";
import { utilTypes } from "shared/api/types";

type OptionsType = {
  func: utilTypes.FilterFunc;
  title: string;
  value: string;
  id: string;
};

export const useFilterTasks = () => {
  const addFilter = taskModel.addFilterFunc;
  const removeFilter = taskModel.removeFilterFunc;

  const options: OptionsType[] = [
    {
      func: (item) => {
        return true;
      },
      title: "Все",
      value: "All",
      id: "1",
    },
    {
      func: (item) => {
        return item.isDone;
      },
      title: "Завершённые",
      value: "Done",
      id: "2",
    },
    {
      func: (item) => {
        return !item.isDone;
      },
      title: "Активные",
      value: "Active",
      id: "3",
    },
  ];

  return { options, addFilter, removeFilter };
};
