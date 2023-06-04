import { ReactNode, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <BsHeartFill color="#ff6b81" size={20} onClick={toggle} />;
  return <BsHeart color="#ff6b81" size={20} onClick={toggle} />;
};

export default Like;
