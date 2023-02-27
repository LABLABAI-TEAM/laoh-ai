import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Grid3x3 } from "@mui/icons-material";
import AskForMeal from "./contents/AskForMeal";

const RecipesCreateOrder = () => {
  return (
    <div>
      {/* <Grid
        container
        spacing={{ xs: 2, md: 10 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowSpacing={2}
        columnSpacing={{ xs: 2, sm: 2, md: 4 }}
      >
        <Grid item xs={6}>
          <AskForMeal />
        </Grid>
        <Grid item xs={6}>
          <AskForMeal />
        </Grid>
      </Grid> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "50%" }}>
          <AskForMeal />
        </Box>
        <Box sx={{ width: "100%", maxWidth: "50%" }}>
          <AskForMeal />
        </Box>
      </Box>
    </div>
  );
};

export default RecipesCreateOrder;
