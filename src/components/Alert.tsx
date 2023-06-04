import { ReactNode } from "react";

interface Props {
  color?: "primary" | "secondary" | "info" | "warning" | "danger";
  children: ReactNode;
  dismissible?: boolean;
}

const Alert = ({ children, color = "primary", dismissible = false }: Props) => {
  let alert = "alert alert-" + color;
  if (dismissible) {
    alert += " alert-dismissible";
  }
  return (
    <div className={alert + " fade show"} role="alert">
      {children}
    </div>
  );
};

export default Alert;
