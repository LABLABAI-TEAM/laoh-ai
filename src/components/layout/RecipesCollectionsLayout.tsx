import { ComponentsBaseProps, TRecipes } from "@/types/types";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import RecipesHeader from "../recipes/recipecollections/contents/RecipesHeader";
interface RecipeCollectionsProps {
  children: React.ReactNode;
}
const RecipeCollectionsLayout: React.FC<RecipeCollectionsProps & TRecipes> = ({
  children,
  handleSort,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <>
      <Box>
        <Box>
          <RecipesHeader
            handleSort={handleSort}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </Box>
        {children}
      </Box>
    </>
  );
};

export default RecipeCollectionsLayout;
