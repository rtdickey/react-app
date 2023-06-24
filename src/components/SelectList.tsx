import { ReactNode } from "react";

interface Props {
  id: string;
  items: string[];
  defaultOption?: string;
  className: string;
  onChange: (selectList: HTMLSelectElement) => void;
}

function SelectList({ id, items, defaultOption, className, onChange }: Props) {
  return (
    <select
      name={id}
      id={id}
      className={className}
      onChange={(event) => onChange(event.target)}
    >
      {defaultOption != null && (
        <option key={-1} value={-1}>
          {defaultOption}
        </option>
      )}
      {items.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default SelectList;
