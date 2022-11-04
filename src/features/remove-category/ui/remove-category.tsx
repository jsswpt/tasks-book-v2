import { Button } from "shared/ui/button/button";
import { CardInnerLayout } from "shared/ui/card-inner-layout/card-inner-layout";
import { Card } from "shared/ui/card/card";
import { useRemoveCategory } from "../model";

import st from "./styles.module.scss";

type RemoveCategoryProps = {
  categoryid: string;
};

export const RemoveCategory = (props: RemoveCategoryProps) => {
  const model = useRemoveCategory();
  return (
    <Card className={st.card}>
      <CardInnerLayout title="Вы действительно хотите удалить категорию?">
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            model.remove({ id: props.categoryid });
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
