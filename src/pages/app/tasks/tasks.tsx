import { FilterTasks } from "features";
import { observer } from "mobx-react-lite";
import React from "react";
import { TaskCard } from "widgets";
import { IconButton } from "shared/ui/button/icon-button";
import { BsPlus } from "react-icons/bs";

import compose from "compose-function";
import { useTasksPage } from "./model";

import st from "../styles.module.scss";
import { useWindowWidth } from "shared/hooks/useWindowWidth";

const withHocs = compose(React.memo, observer);

export const Tasks = withHocs(() => {
  const model = useTasksPage();

  const width = useWindowWidth();

  return (
    <div className={st.tasks_page}>
      <div className={st.filters_wrap}>
        <FilterTasks />
      </div>
      <div className={st.tasks_wrap}>
        <ul className={st.tasks_list}>
          {model.tasks.currentList.map((item) => (
            <TaskCard {...item} key={item.id} />
          ))}
        </ul>
      </div>
      {width < 1000 && (
        <div className={st.levitate_wrap_button}>
          <IconButton
            variant="contained"
            size="large"
            onClick={model.toggleModal}
          >
            <BsPlus />
          </IconButton>
        </div>
      )}
    </div>
  );
});
