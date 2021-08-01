import { FC } from "react";
import classes from "../../styles/Button.module.scss";

interface ButtonProps {
  handleClick?: any;
  type: string;
  background: string;
}

const Button: FC<ButtonProps> = ({
  handleClick,
  children,
  type,
  background,
}) => {
  switch (type) {
    case "button":
      return (
        <button
          style={{ backgroundColor: background }}
          className={classes.btn}
          type="button"
          onClick={() => {
            handleClick();
          }}
        >
          {children}
        </button>
      );
    case "submit":
      return (
        <button
          type="submit"
          className={classes.btn}
          style={{ backgroundColor: background }}
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          style={{ backgroundColor: background }}
          className={classes.btn}
          type="button"
          onClick={() => {
            handleClick();
          }}
        >
          {children}
        </button>
      );
  }
};
export default Button;
