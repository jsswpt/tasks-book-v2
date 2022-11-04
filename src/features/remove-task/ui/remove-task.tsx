import { Button } from "shared/ui/button/button";
import { CardInnerLayout } from "shared/ui/card-inner-layout/card-inner-layout";
import { Card } from "shared/ui/card/card";
import { useRemoveTask } from "../model";

import st from "./styles.module.scss";

type RemoveTaskProps = {
  taskid: string;
};

export const RemoveTask = (props: RemoveTaskProps) => {
  const model = useRemoveTask();
  return (
    <Card className={st.card}>
      <CardInnerLayout title="Вы действительно хотите удалить задачу?">
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            model.removeTask(props.taskid);
            model.close();
          }}
        >
          <div className={st.bottom}>
            <Button color="inherit" onClick={model.close}>
              Отмена
            </Button>
            <Button color="danger" type="submit">
              Удалить
            </Button>
          </div>
        </form>
      </CardInnerLayout>
    </Card>
  );
};
