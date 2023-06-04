import { ReactNode, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    onClick();
    setLike(!like);
  };

  return (
    <>
      {!like && <BsHeart onClick={handleClick} />}
      {like && <BsHeartFill onClick={handleClick} />}
    </>
  );
};

export default Like;
