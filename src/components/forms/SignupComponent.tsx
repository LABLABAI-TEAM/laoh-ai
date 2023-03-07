import React from "react";
import * as Yup from "yup";
import AppForm from "./AppForm";
import { loadingButtonClasses, LoadingButton } from "@mui/lab";
import { Grid, GridWrap } from "@mui/material";
import AppFormField from "./FormField";
import { useFormik } from "formik";
import { SubmitButton } from "@/hooks";
import cx from "classnames";
import { UserSignup } from "@/types/types";
import Swal from "sweetalert2";

const RegisterFormComponent = () => {
  const ValidationSchema = Yup.object().shape({
    usernames: Yup.string().required().label("Username").min(5),
    password: Yup.string().required().label("Password").min(4),
    email: Yup.string().required().label("Email").email(),
  });
  const [submitting, setSubmitting] = React.useState(true);

  const { initialValues, handleSubmit, isSubmitting, submitForm, resetForm } =
    useFormik({
      initialValues: {
        usernames: "",
        password: "",
        email: "",
      },
      onSubmit: (values, { resetForm, setFieldTouched }) => {
        console.log("Registrattion Value", values);
        Swal.fire({
          text: "Cancel",
          title: "Cancel",
          icon: "warning",
          footer: "sssssss",
          cancelButtonColor: "red",
          confirmButtonText: "Undo",
        });
        // setSubmitting((isPrev) => !isPrev);
        setTimeout(() => {
          console.log("kdkdkd");
          resetForm();
        }, 3000);
      },
    });

  window.addEventListener(
    "message",
    (event: MessageEvent) => {
      if (event.data.type === "resetForm") {
        resetForm();
      }
    },
    false
  );
  return (
    <>
      <AppForm
        onSubmit={submitForm}
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
            <Grid item xs={12}>
              <SubmitButton
                isSubmitting={!submitting}
                variant="contained"
                type="submit"
              >
                Submit
              </SubmitButton>
            </Grid>
          </Grid>
        </form>
      </AppForm>
    </>
  );
};

export default RegisterFormComponent;
