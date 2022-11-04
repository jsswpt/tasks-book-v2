import { categoryModel } from "entities/category";
import { observer } from "mobx-react-lite";
import { Button } from "shared/ui/button/button";
import { CardInnerLayout } from "shared/ui/card-inner-layout/card-inner-layout";
import { Card } from "shared/ui/card/card";
import { Input } from "shared/ui/input/input";
import { TextArea } from "shared/ui/input/text-area";
import { Option } from "shared/ui/select/option";
import { Select } from "shared/ui/select/select";
import { useAddTask } from "../model";

import st from "./styles.module.scss";

export const AddTask = observer(() => {
  const model = useAddTask();
  const categories = categoryModel.state.categories;
  return (
    <Card className={st.card}>
      <CardInnerLayout title="Создать задачу">
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            model.handleSubmit();
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
            <Select
              caption="Категория"
              name="categoryId"
              onChange={model.handleChange}
            >
              {categories.map((item) => (
                <Option value={item.id} key={item.id}>
                  {item.title}
                </Option>
              ))}
            </Select>
          </div>
          <div className={st.middle}>
            <TextArea
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
            <Button color="danger">Cancel</Button>
            <Button color="primary" type="submit" disabled={model.isSubmitting}>
              Add
            </Button>
          </div>
        </form>
      </CardInnerLayout>
    </Card>
  );
});
