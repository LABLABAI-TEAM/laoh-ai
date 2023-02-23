import { useState } from "react";
import * as Yup from "yup";
import { FormikProvider, useFormik, FieldArray } from "formik";
import { postRequest } from "@/utils/api/api";
import { LoadingButton } from "@mui/lab";
import { Grid, TextField, Typography, Button, Box } from "@mui/material";
import Swal from "sweetalert2";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";
interface FormValues {
  ingredients: string[];
  // other form values
}

interface FormErrors {
  ingredients?: string[];
  // other form errors
}

interface FormTouched {
  ingredients?: boolean[];
  // other form touched values
}

const formSchema = Yup.object().shape({
  ingredients: Yup.array(
    Yup.string()
      .required("This field is required")
      .min(3, "Ingredient should be of minimum 3 characters length")
  ),
});

function Ingredients({ showOutput }: { showOutput: (a: any) => void }) {
  const [submitting, setSubmitting] = useState(false);

  const gaEventTracker = useAnalyticsEventTracker("Recipes By AI");

  const formik = useFormik<FormValues>({
    initialValues: {
      ingredients: [""],
    },
    onSubmit: function (formData) {
      gaEventTracker("Creative Cooking");

      setSubmitting(true);

      postRequest("/ai-ingredient", formData)
        .then((res) => {
          showOutput(res?.data?.message);
          setSubmitting(false);
        })
        .catch((err: unknown) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: err instanceof Error ? err.message : undefined,
          });
          setSubmitting(false);
        });
    },

    validationSchema: formSchema,
    initialErrors: {} as FormErrors,
  });

  window.addEventListener(
    "message",
    (event) => {
      if (event.data.type === "resetForm") {
        formik.resetForm();
      }
    },
    false
  );

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        style={{ marginLeft: 20, marginRight: 20, marginBottom: 10 }}
      >
        <FieldArray
          name="ingredients"
          render={(arrayHelpers) => (
            <div>
              {formik.values.ingredients.map((ingredient, index) => (
                <Grid
                  key={index}
                  container
                  sx={{ mb: 3 }}
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item lg={3} sm={12} xs={12}>
                    <Typography sx={{ pt: "9px" }}>
                      Ingredient {index + 1} *
                    </Typography>
                  </Grid>
                  <Grid item lg={6} sm={8} xs={12}>
                    <TextField
                      fullWidth
                      id={`ingredients[${index}]`}
                      name={`ingredients[${index}]`}
                      value={formik.values.ingredients[index]}
                      size="small"
                      error={
                        // @ts-ignore
                        formik.touched.ingredients?.length > 0 &&
                        // @ts-ignore
                        formik.touched.ingredients[index] &&
                        // @ts-ignore
                        formik.errors.ingredients?.length > 0 &&
                        // @ts-ignore
                        Boolean(formik.errors.ingredients[index])
                      }
                      helperText={
                        // @ts-ignore
                        formik.touched.ingredients?.length > 0 &&
                        // @ts-ignore
                        formik.touched?.ingredients[index] &&
                        // @ts-ignore
                        formik.errors.ingredients?.length > 0 &&
                        // @ts-ignore
                        Boolean(formik.errors.ingredients[index])
                          ? // @ts-ignore
                            formik.errors.ingredients[index]
                          : ""
                      }
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </Grid>
                  <Grid item lg={3} sm={4} xs={12}>
                    <Button
                      variant="outlined"
                      onClick={() => arrayHelpers.remove(index)}
                      color="error"
                      style={{
                        width: "100%",
                        display: index === 0 ? "none" : "block",
                      }}
                    >
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              ))}
              <Box sx={{ mt: 5 }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item sm={6} xs={12}>
                    <Button
                      variant="outlined"
                      style={{ width: "100%" }}
                      onClick={() => arrayHelpers.push("")}
                    >
                      Add More..
                    </Button>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <LoadingButton
                      type="submit"
                      loading={submitting}
                      variant="contained"
                      style={{ width: "100%" }}
                    >
                      Submit
                    </LoadingButton>
                  </Grid>
                </Grid>
              </Box>
            </div>
          )}
        />
      </form>
    </FormikProvider>
  );
}

export default Ingredients;
