import { ChangeEvent } from "react";

interface Props {
  categories: string[];
  defaultValue: string;
  onChange?: (selectedCategory: string) => void;
}

//TODO: Add onChange event
const SelectCategories = ({ categories, defaultValue, onChange }: Props) => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <select
      name="category"
      id="category"
      className="form-control"
      defaultValue={defaultValue}
      onChange={handleOnChange}
    >
      <option value={defaultValue}>{defaultValue}</option>
      {categories.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectCategories;
