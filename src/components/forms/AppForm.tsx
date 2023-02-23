import React from "react";
import { Formik } from "formik";
import { ComponentsBaseProps } from "@/types/types";

const AppForm: ComponentsBaseProps = ({
  children,
  ValidationSchema,
  initialValues,
  onSubmit,
}) => {
  return (
    <>
      <Formik
        initialValues={initialValues!}
        // @ts-ignore
        onSubmit={onSubmit}
        validationSchema={ValidationSchema}
      >
        {() => <>{children}</>}
      </Formik>
    </>
  );
};

export default AppForm;
