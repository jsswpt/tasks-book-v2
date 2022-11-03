import { observer } from "mobx-react-lite";
import { useFilterTasks } from "../model";

export const FilterTasks = observer(() => {
  const model = useFilterTasks();

  return (
    <select
      defaultValue={model.options[0].value}
      onChange={(evt) => {
        const item = model.options.find(
          (item) => item.value === evt.currentTarget.value
        );

        model.removeFilter(item!.id);

        model.addFilter({ func: item!.func, id: item!.id });
      }}
    >
      {model.options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.title}
        </option>
      ))}
    </select>
  );
});
