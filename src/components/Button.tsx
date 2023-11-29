import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button type="button" onClick={onClick} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
