import style from "./Button.module.css";

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button className={style.btnColor} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
