import { ComponentsBaseProps } from "@/types/types";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import RecipesHeader from "./contents/RecipesHeader";
import { CollectionsLayout } from "@/components/layout";
import RecipeCollectionsLayout from "@/components/layout/RecipesCollectionsLayout";

const RecipeCollections = () => {
  return (
    <>
      <Box>
        <RecipeCollectionsLayout>
          <h1>hello</h1>
        </RecipeCollectionsLayout>
      </Box>
    </>
  );
};

export default RecipeCollections;
