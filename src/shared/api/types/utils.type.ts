import { taskTypes } from ".";

export type FilterFunc = (item: taskTypes.Task) => boolean;

export type FilterFunctionType = {
  func: FilterFunc;
  id: string;
};
