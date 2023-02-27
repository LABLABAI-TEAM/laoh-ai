import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Grid3x3 } from "@mui/icons-material";
import AskForMeal from "./contents/AskForMeal";
import Response from "./contents/Response";

const RecipesCreateOrder = () => {
  return (
    <div>
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
          <Response />
        </Box>
      </Box>
    </div>
  );
};

export default RecipesCreateOrder;
