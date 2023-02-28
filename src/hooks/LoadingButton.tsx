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
  // color: "info" | " success" | "danger" | "warning" | "error" | "secondary";
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
      type,
      ...props
    },
    ref
  ) => {
    return (
      <LoadingButton
        // @ts-ignore
        ref={ref}
        className={cx(
          className,
          "w-full py-3 ",
          !isSubmitting && "cursor-not-allowed"
        )}
        variant={variant}
        onClick={handleEvent}
        loading={isSubmitting}
        color="success"
        type={type}
        // {...props}
      >
        {children}
      </LoadingButton>
    );
  }
);
SubmitButton.displayName = "SubmitButton";
export default SubmitButton;
