import React from "react";

interface Props {
  name: string;
  onButtonClick: () => void;
}

const MyButton = ({ name, onButtonClick }: Props) => {
  return (
    <button className="btn btn-primary" onClick={onButtonClick}>
      {name}
    </button>
  );
};

export default MyButton;
