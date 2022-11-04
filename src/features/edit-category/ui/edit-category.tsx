import { Button } from "shared/ui/button/button";
import { CardInnerLayout } from "shared/ui/card-inner-layout/card-inner-layout";
import { Card } from "shared/ui/card/card";
import { Input } from "shared/ui/input/input";
import { useEditCategory } from "../model";

import st from "./styles.module.scss";

type EditCategoryProps = {
  categoryid: string;
};

export const EditCategory = (props: EditCategoryProps) => {
  const model = useEditCategory(props.categoryid);
  return (
    <Card className={st.card}>
      <CardInnerLayout title="Редактирование категории">
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            model.setCategoryFunc();
            model.close();
          }}
          className={st.form}
        >
          <div className={st.top}>
            <Input
              value={model.title}
              onChange={(evt) => model.setTitle(evt.currentTarget.value)}
              fullWidth
              placeholder="Введите название категории"
              caption="Название"
            />
          </div>
          <div className={st.bottom}>
            <Button color="danger" onClick={model.close}>
              Отмена
            </Button>
            <Button color="primary" type="submit">
              Изменить
            </Button>
          </div>
        </form>
      </CardInnerLayout>
    </Card>
  );
};
