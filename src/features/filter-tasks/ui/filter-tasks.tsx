import { observer } from "mobx-react-lite";
import { Option } from "shared/ui/select/option";
import { Select } from "shared/ui/select/select";
import { useFilterTasks } from "../model";

export const FilterTasks = observer(() => {
  const model = useFilterTasks();

  return (
    <Select
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
        <Option key={item.value} value={item.value}>
          {item.title}
        </Option>
      ))}
    </Select>
  );
});
