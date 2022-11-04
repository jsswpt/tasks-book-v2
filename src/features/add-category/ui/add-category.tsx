import { observer } from "mobx-react-lite";
import { Button } from "shared/ui/button/button";
import { CardInnerLayout } from "shared/ui/card-inner-layout/card-inner-layout";
import { Card } from "shared/ui/card/card";
import { Input } from "shared/ui/input/input";
import { useAddCategory } from "../model";

import st from "./styles.module.scss";

// по идее, формы создания категории и задачи одинаковые, поэтмоу можно было вынести их в
// layout

export const AddCategory = observer(() => {
  const model = useAddCategory();
  return (
    <Card className={st.card}>
      <CardInnerLayout title="Новая категория">
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            model.handleSubmit();
          }}
          className={st.form}
        >
          <div className={st.top}>
            <Input
              name="title"
              value={model.values.title}
              onChange={model.handleChange}
              fullWidth
              placeholder="Введите название категории"
              caption="Название"
            />
          </div>
          <div className={st.bottom}>
            <Button color="danger" onClick={model.close}>
              Отмена
            </Button>
            <Button color="primary" type="submit" disabled={model.isSubmitting}>
              Создать
            </Button>
          </div>
        </form>
      </CardInnerLayout>
    </Card>
  );
});
