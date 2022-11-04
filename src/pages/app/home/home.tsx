import React from "react";
import { Outlet } from "react-router-dom";
import { CardInnerLayout } from "shared/ui/card-inner-layout/card-inner-layout";
import { Card } from "shared/ui/card/card";

import st from "./styles.module.scss";

export const Home = React.memo(() => {
  return (
    <div className={st.page}>
      <div className={st.side}>
        <Card>
          <CardInnerLayout title="Статистика">
            В теории можно добавить виджет статистики
          </CardInnerLayout>
        </Card>
        <Card>
          <CardInnerLayout title="Задачи">
            <Outlet />
          </CardInnerLayout>
        </Card>
      </div>
      <div className={st.side}>
        <Card>
          <CardInnerLayout title="Факт">
            Какой-то случайный факт
          </CardInnerLayout>
        </Card>
        <Card>
          <CardInnerLayout title="Ещё что-то">Какой-то блок</CardInnerLayout>
        </Card>
      </div>
    </div>
  );
});
