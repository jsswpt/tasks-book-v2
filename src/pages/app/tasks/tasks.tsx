import { taskModel } from "entities/task/task";
import { FilterTasks } from "features";
import { observer } from "mobx-react-lite";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { TaskCard } from "widgets";

export const Tasks = observer(() => {
  const { categoryId } = useParams();
  const tasks = taskModel;

  useEffect(() => {
    tasks.setCurrentCategory(categoryId!);
  }, [categoryId]);

  return (
    <div>
      <div className="">
        <FilterTasks />
      </div>
      {tasks.currentList.map((item) => (
        <TaskCard {...item} key={item.id} />
      ))}
    </div>
  );
});
