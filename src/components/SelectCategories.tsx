interface Props {
  categories: string[];
  defaultValue: string;
}

//TODO: Add onChange event
const SelectCategories = ({ categories, defaultValue }: Props) => {
  return (
    <select
      name="category"
      id="category"
      className="form-control"
      defaultValue={defaultValue}
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
