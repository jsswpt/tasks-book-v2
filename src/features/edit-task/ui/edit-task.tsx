import { Button } from "shared/ui/button/button";
import { Caption } from "shared/ui/caption/caption";
import { CardInnerLayout } from "shared/ui/card-inner-layout/card-inner-layout";
import { Card } from "shared/ui/card/card";
import { Input } from "shared/ui/input/input";
import { TextArea } from "shared/ui/input/text-area";
import { Option } from "shared/ui/select/option";
import { Select } from "shared/ui/select/select";
import { useEditTask } from "../model";

import st from "./styles.module.scss";

type EditTaskProps = {
  taskid: string;
};

export const EditTask = (props: EditTaskProps) => {
  const model = useEditTask(props.taskid);
  return (
    <Card className={st.card}>
      <CardInnerLayout title="Редактирование заметки">
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            model.handleSubmit();
            model.close();
          }}
          className={st.form}
        >
          <div className={st.top}>
            <Input
              fullWidth
              caption="Задача"
              placeholder="Введите задачу"
              name="title"
              value={model.values.title}
              onChange={model.handleChange}
            />
            {model.categories.length > 0 ? (
              <Select
                caption="Категория"
                name="categoryId"
                onChange={model.handleChange}
                defaultValue={"disabled"}
              >
                <Option disabled value="disabled">
                  Категория
                </Option>
                {model.categories.map((item) => (
                  <Option value={item.id} key={item.id}>
                    {item.title}
                  </Option>
                ))}
              </Select>
            ) : (
              <div className={st.no_categories}>
                <Caption>Создайте категорию</Caption>
                <Button variant="contained" type="submit">
                  Изменить
                </Button>
              </div>
            )}
          </div>
          <div className={st.middle}>
            <TextArea
              placeholder="Введите описание задачи"
              fullWidth
              name="description"
              value={model.values.description}
              onChange={model.handleChange}
              rows={5}
            />

            <div className={st.middle_date}>
              <Input
                name="creationDate"
                type="date"
                value={model.values.creationDate.toString()}
                onChange={model.handleChange}
              />
              <Input
                name="deadline"
                type="date"
                value={model.values.deadline.toString()}
                onChange={model.handleChange}
              />
            </div>
          </div>
          <div className={st.bottom}>
            <Button color="danger" onClick={model.close}>
              Отмена
            </Button>
            {model.categories.length > 0 && (
              <Button
                color="primary"
                type="submit"
                disabled={model.isSubmitting}
              >
                Изменить
              </Button>
            )}
          </div>
        </form>
      </CardInnerLayout>
    </Card>
  );
};
