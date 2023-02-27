import { AppCheckbox } from "@/hooks";
import { Grid, Box, Typography, Checkbox } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import AppForm from "./AppForm";
import AppFormField from "./FormField";

const formValues = Yup.object({
  name: Yup.string()
    .required("Meal Name is required")
    .min(3, "Meal name should be of minimum 3 characters length"),
  diet: Yup.string().min(3, "Dietary should be of minimum 3 characters length"),
  store: Yup.string().min(3, "Grocery store be of minimum 3 characters length"),
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
const FormInitialValues = {
  name: "",
  diet: "",
  store: "",
  people: false,
  peopleNumber: 0,
  health: false,
  taste: false,
  cost: false,
  dessert: false,
  sides: false,
};
const AskingForMealForm = () => {
  const { initialValues, handleSubmit, getFieldProps } = useFormik({
    initialValues: FormInitialValues,
    onSubmit: () => {},
  });
  return (
    <>
      <AppForm
        onSubmit={handleSubmit}
        initialValues={initialValues}
        ValidationSchema={formValues}
      >
        <Box sx={{ m: 15 }}>
          <form>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              bgcolor="#646D97"
              p={10}
              className="rounded-t-xl"
            >
              <Typography className="text__element w-full text-center">
                Ask For A Meal
              </Typography>
              <Grid item xs={12}>
                <AppFormField
                  placeholder="Examples are Chicken Pot Pie, Fettuccini Alfredo Pasta, etc"
                  name="name"
                />
              </Grid>
              <Grid item xs={12}>
                <AppFormField
                  placeholder="Examples are vegan, gluten-free, diabetic, etc"
                  name="diet"
                />
              </Grid>
              <Grid item xs={12}>
                <AppFormField
                  placeholder="Examples are Whole Foods, Albertsons, Kroger, etc"
                  name="store"
                />
              </Grid>
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Grid item xs={12} sm={4} md={6} lg={4}>
                  <AppCheckbox
                    control={<Checkbox {...getFieldProps("people")} />}
                    label="People to Feed"
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={6} lg={4}>
                  <AppFormField
                    name="peopleNumber"
                    placeholder="People's Number"
                  />
                </Grid>
              </Box>
            </Grid>
            {/*  */}
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              bgcolor="#34455E"
              className="rounded-b-xl"
              p={5}
            >
              <Grid item xs={4}>
                <AppCheckbox
                  control={
                    <Checkbox
                      {...getFieldProps("health")}
                      className="checkbox__p whitespace-nowrap"
                      sx={{ fontSize: 10 }}
                      color="success"
                    />
                  }
                  label="Click here to make the recipe healthier"
                />
              </Grid>
              <Grid item xs={4}>
                <AppCheckbox
                  control={<Checkbox {...getFieldProps("taste")} />}
                  label="Click here to make the recipe tastier"
                />
              </Grid>
              <Grid item xs={4}>
                <AppCheckbox
                  control={<Checkbox {...getFieldProps("cost")} />}
                  label="Click here to make the recipe more cost effective"
                />
              </Grid>
              <Grid item xs={4}>
                <AppCheckbox
                  control={<Checkbox {...getFieldProps("sides")} />}
                  label="Click here for a suggestion on sides"
                />
              </Grid>
              <Grid item xs={4}>
                <AppCheckbox
                  control={<Checkbox {...getFieldProps("dessert")} />}
                  label="Click here for a dessert suggestion"
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </AppForm>
    </>
  );
};

export default AskingForMealForm;
/**<Checkbox
        {...label}
        defaultChecked
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      /> */
