import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cx from "classnames";
import { Button } from "@mui/material";
import { orange } from "@mui/material/colors";
import { LoadingButton } from "@mui/lab";
interface IMainButtonProps {
  message?: string;
  handleEvent?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "text" | "contained" | "outlined";
  isSubmitting?: boolean;
}

const SubmitButton = forwardRef<
  HTMLButtonElement & IMainButtonProps,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement> & IMainButtonProps,
    HTMLButtonElement
  >
>(
  (
    {
      children,
      className,
      message,
      handleEvent,
      variant,
      isSubmitting,
      ...props
    },
    ref
  ) => {
    return (
      <LoadingButton
        ref={ref}
        className={cx(className, "w-full py-3 ")}
        variant={variant}
        onClick={handleEvent}
        color={"success"}
        loading={isSubmitting}
      >
        {children}
      </LoadingButton>
    );
  }
);
export default SubmitButton;
