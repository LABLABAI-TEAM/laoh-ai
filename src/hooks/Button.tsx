import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cx from "classnames";
import { Button } from "@mui/material";
import { orange } from "@mui/material/colors";
interface IMainButtonProps {
  message?: string;
  handleEvent?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "text" | "contained" | "outlined";
}

const MainButton = forwardRef<
  HTMLButtonElement & IMainButtonProps,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement> & IMainButtonProps,
    HTMLButtonElement
  >
>(({ children, className, message, handleEvent, variant, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cx(className, "w-full py-3 ")}
      variant={variant}
      onClick={handleEvent}
      color={"success"}
    >
      {children}
    </Button>
  );
});
export default MainButton;
