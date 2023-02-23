import React from "react";
import * as Yup from "yup";
import AppForm from "./AppForm";
import { loadingButtonClasses, LoadingButton } from "@mui/lab";
import { Grid, GridWrap } from "@mui/material";
import AppFormField from "./FormField";
import { useFormik } from "formik";

const RegisterFormComponent = () => {
  const ValidationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username").min(5),
    password: Yup.string().required().label("Password").min(4),
    email: Yup.string().required().label("Email").email(),
  });
  const { initialValues, handleSubmit, setSubmitting, isSubmitting } =
    useFormik({
      initialValues: {
        usernames: "",
        password: "",
        email: "",
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
              <AppFormField placeholder="Your EmailAddress" name="email" />
            </Grid>
            <Grid item xs={12}>
              <AppFormField placeholder="Your Password" name="password" />
            </Grid>
            <LoadingButton
              loading={isSubmitting}
              variant="contained"
              className="w-full"
            >
              Submit
            </LoadingButton>
          </Grid>
        </form>
      </AppForm>
    </>
  );
};

export default RegisterFormComponent;
