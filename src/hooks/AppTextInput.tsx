import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  forwardRef,
} from "react";
import cx from "classnames";
import { Button, TextField } from "@mui/material";
import { orange } from "@mui/material/colors";
interface IMainButtonProps {
  message?: string;
  handleEvent?: React.MouseEventHandler<HTMLInputElement>;
  variant?: "standard" | "filled" | "outlined";
  onChange?: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const AppTextInput = forwardRef<
  HTMLInputElement & IMainButtonProps,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLInputElement> & IMainButtonProps,
    HTMLInputElement
  >
>(
  (
    {
      children,
      className,
      message,
      handleEvent,
      variant,
      onChange,
      placeholder,
      name,
      ...props
    },
    ref
  ) => {
    return (
      <TextField
        ref={ref}
        className={cx(className, "w-full py-3 border-re ")}
        variant={variant}
        onClick={handleEvent}
        color={"warning"}
        fullWidth
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    );
  }
);
export default AppTextInput;
