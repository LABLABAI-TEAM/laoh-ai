import AppTextInput from "@/hooks/AppTextInput";
import { ComponentsBaseProps } from "@/types/types";
import { useFormikContext } from "formik";
import React from "react";
import AppErrorMessage from "./AppErrorMessage";

const AppFormField: ComponentsBaseProps = ({ name, placeholder }) => {
  const {
    setFieldTouched,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChange={handleChange}
        onBlur={() => setFieldTouched(name!)}
        placeholder={placeholder}
      />
      {/* @ts-ignore */}
      <AppErrorMessage error={errors[name!]} touched={touched[name]} />
    </>
  );
};

export default AppFormField;
