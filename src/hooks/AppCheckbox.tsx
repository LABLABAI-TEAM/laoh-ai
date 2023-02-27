import {
  FormControlLabelProps,
  CheckboxProps,
  FormControlLabel,
} from "@mui/material";
import React from "react";
interface AppCheckboxProps extends FormControlLabelProps {
  check?: React.ReactElement<any, any>;
  label: string;
}
const AppCheckbox = (props: AppCheckboxProps): JSX.Element => {
  const { check, label, control } = props || {};
  return <FormControlLabel control={control} label={label} />;
};

export default AppCheckbox;
