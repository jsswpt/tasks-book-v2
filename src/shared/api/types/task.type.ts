export type Task = {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  creationDate: Date;
  categoryId: string;
  isDone: boolean;
};

export type CreateTaskProps = Omit<Task, "id" | "isDone">;
export type RemoveTaskProps = Pick<Task, "id">;
