import { Outlet } from "react-router-dom";
import { CardInnerLayout } from "shared/ui/card-inner-layout/card-inner-layout";
import { Card } from "shared/ui/card/card";

import st from "./styles.module.scss";

export const Home = () => {
  return (
    <div className={st.page}>
      <div className={st.side}>
        <Card>
          <CardInnerLayout title="Статистика">
            Тут будут виджеты везде
          </CardInnerLayout>
        </Card>
        <Card>
          <CardInnerLayout title="Задачи">Какой-то блок</CardInnerLayout>
        </Card>
      </div>
      <div className={st.side}>
        <Card>
          <CardInnerLayout title="Задачи">Какой-то блок</CardInnerLayout>
        </Card>
        <Card>
          <CardInnerLayout title="Задачи">Какой-то блок</CardInnerLayout>
        </Card>
      </div>
    </div>
  );
};
