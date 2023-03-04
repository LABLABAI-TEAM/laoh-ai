import { postRequest } from "@/utils/api/api";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { Grid, TextField, Checkbox, FormControlLabel } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Swal from "sweetalert2";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";

const formSchema = Yup.object({
  name: Yup.string()
    .required("Meal name is required")
    .min(3, "Meal name should be of minimum 3 characters length"),
  diet: Yup.string().min(3, "Dietary should be of minimum 3 characters length"),
  store: Yup.string().min(
    3,
    "Grocery store should be of minimum 3 characters length"
  ),
  people: Yup.bool(),
  peopleNumber: Yup.number().min(
    2,
    "Number of people to feed should be of minimum 2"
  ),
  health: Yup.bool(),
  taste: Yup.bool(),
  cost: Yup.bool(),
  dessert: Yup.bool(),
  sides: Yup.bool(),
});

function Recipes({ showOutput }: { showOutput: (a: any) => void }) {
  const [submitting, setSubmitting] = useState(false);

  const gaEventTracker = useAnalyticsEventTracker("Recipes By AI");

  const formik = useFormik({
    validationSchema: formSchema,
    initialValues: {
      name: "",
      diet: "",
      store: "",
      people: false,
      peopleNumber: 2,
      health: false,
      taste: false,
      cost: false,
      dessert: false,
      sides: false,
    },
    onSubmit: function (formData: {}) {
      gaEventTracker("Recipe Finder");

      setSubmitting(true);

      postRequest("/ai-recipe", formData)
        .then((res) => {
          showOutput(res?.data?.message);
          setSubmitting(false);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: err,
          });
          setSubmitting(false);
        });
    },
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
    <form onSubmit={formik.handleSubmit}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="name"
            label="Meal Name"
            size="small"
            placeholder="Examples are Chicken Pot Pie, Fettuccini Alfredo Pasta, etc"
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            {...formik.getFieldProps("name")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="diet"
            label="Dietary"
            size="small"
            placeholder="Examples are vegan, gluten-free, diabetic, etc"
            error={formik.touched.diet && Boolean(formik.errors.diet)}
            helperText={formik.touched.name && formik.errors.diet}
            {...formik.getFieldProps("diet")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="store"
            label="Grocery Store"
            size="small"
            placeholder="Examples are Whole Foods, Albertsons, Kroger, etc"
            error={formik.touched.store && Boolean(formik.errors.store)}
            helperText={formik.touched.store && formik.errors.store}
            {...formik.getFieldProps("store")}
          />
        </Grid>
        <Grid item lg={4} md={6} sm={4} xs={12}>
          <FormControlLabel
            control={<Checkbox {...formik.getFieldProps("people")} />}
            label="People to Feed"
          />
        </Grid>
        <Grid item lg={8} md={6} sm={8} xs={12}>
          <TextField
            fullWidth
            id="peopleNumber"
            size="small"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            disabled={!formik.values.people}
            error={
              formik.touched.peopleNumber && Boolean(formik.errors.peopleNumber)
            }
            helperText={
              formik.touched.peopleNumber && formik.errors.peopleNumber
            }
            {...formik.getFieldProps("peopleNumber")}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ mt: 3 }}>
        <FormControlLabel
          control={<Checkbox {...formik.getFieldProps("health")} />}
          label="Click here to make the recipe healthier"
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 1 }}>
        <FormControlLabel
          control={<Checkbox {...formik.getFieldProps("taste")} />}
          label="Click here to make the recipe tastier"
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 1 }}>
        <FormControlLabel
          control={<Checkbox {...formik.getFieldProps("cost")} />}
          label="Click here to make the recipe more cost effective"
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 1 }}>
        <FormControlLabel
          control={<Checkbox {...formik.getFieldProps("sides")} />}
          label="Click here for a suggestion on sides"
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 1 }}>
        <FormControlLabel
          control={<Checkbox {...formik.getFieldProps("dessert")} />}
          label="Click here for a dessert suggestion"
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 3 }}>
        <LoadingButton
          type="submit"
          loading={submitting}
          variant="contained"
          style={{ width: "100%" }}
        >
          Submit
        </LoadingButton>
      </Grid>
    </form>
  );
}

export default Recipes;
