import React from "react";
import * as Yup from "yup";
import AppForm from "./AppForm";
import { loadingButtonClasses, LoadingButton } from "@mui/lab";
import { Grid, GridWrap } from "@mui/material";
import AppFormField from "./FormField";
import { useFormik } from "formik";

const FormComponent = () => {
  const ValidationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username").min(1),
    password: Yup.string().required().label("Email").email(),
  });
  const { initialValues, handleSubmit, setSubmitting, isSubmitting } =
    useFormik({
      initialValues: {
        usernames: "",
        password: "",
      },
      onSubmit: () => {},
    });
  return (
    <>
      <AppForm
        onSubmit={() => {}}
        ValidationSchema={ValidationSchema}
        initialValues={initialValues}
      >
        <form onSubmit={handleSubmit}>
          <Grid
            container
            rowSpacing={{ xs: 2, md: 2 }}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
          >
            <Grid item xs={12}>
              <AppFormField placeholder="Your User Name" name="usernames" />
            </Grid>
            <Grid item xs={12}>
              <AppFormField placeholder="Your User Name" name="usernames" />
            </Grid>
            <Grid item xs={12}>
              <AppFormField placeholder="Your User Name" name="usernames" />
            </Grid>
            <Grid item xs={12}>
              <AppFormField placeholder="Your User Name" name="usernames" />
            </Grid>
            <LoadingButton loading={isSubmitting}>Submit</LoadingButton>
          </Grid>
        </form>
      </AppForm>
    </>
  );
};

export default FormComponent;
