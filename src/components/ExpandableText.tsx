import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 10 }: Props) => {
  const [expandText, setExpandText] = useState(false);

  const printText = () => {
    if (expandText) return children;
    return children?.toString().substring(0, maxChars);
  };

  return (
    <div>
      {printText()}...
      <button onClick={() => setExpandText(!expandText)}>
        {expandText ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
