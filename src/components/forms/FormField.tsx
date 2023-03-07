import AppTextInput from "@/hooks/AppTextInput";
import { ComponentsBaseProps, UserSignup } from "@/types/types";
import { FormikValues, useFormikContext } from "formik";
import React from "react";
import { boolean } from "zod";
import AppErrorMessage from "./AppErrorMessage";

const AppFormField: ComponentsBaseProps = ({
  name,
  placeholder,
  ...otherProps
}) => {
  const { setFieldTouched, errors, touched, handleChange, values } =
    useFormikContext();
  const safeName = name ?? "";
  return (
    <>
      {/* @ts-ignore */}
      <AppTextInput
        onChange={handleChange}
        onBlur={() => setFieldTouched(name!)}
        placeholder={placeholder}
        name={name}
        // @ts-ignore
        value={values[name]}
        // @ts-ignore
        error={Boolean(touched[safeName]) && Boolean(errors[safeName])}
        // @ts-ignore
        helperText={touched[safeName] && errors[safeName]}
        {...otherProps}
      />
      {/* @ts-ignore */}
      {/* <AppErrorMessage error={errors[name!]} visible={touched[name]} /> */}
    </>
  );
};

export default AppFormField;
