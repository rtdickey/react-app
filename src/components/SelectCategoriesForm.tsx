import { useFormContext } from "react-hook-form";
import SelectCategories from "./SelectCategories";

interface Props {
  categories: string[];
}

const SelectCategoriesForm = ({ categories }: Props) => {
  const { register } = useFormContext();
  return (
    <select
      {...register("category")}
      name="category"
      id="category"
      className="form-control"
      defaultValue=""
    >
      <option value=""></option>
      {categories.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectCategoriesForm;
