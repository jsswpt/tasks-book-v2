import { taskModel } from "entities/task/task";
import { FilterTasks } from "features";
import { observer } from "mobx-react-lite";
import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { TaskCard } from "widgets";
import compose from "compose-function";
import { Button } from "shared/ui/button/button";

import { BsPlusCircle } from "react-icons/bs";

const withHocs = compose(React.memo, observer);

export const Tasks = withHocs(() => {
  const { categoryId } = useParams();
  const tasks = taskModel;

  useEffect(() => {
    tasks.setCurrentCategory(categoryId!);
    console.log(tasks.currentCategory);
  }, [categoryId]);

  return (
    <div>
      <div className="">
        <FilterTasks />
      </div>
      <div>
        <ul className="">
          {tasks.currentList.map((item) => (
            <TaskCard {...item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
});
