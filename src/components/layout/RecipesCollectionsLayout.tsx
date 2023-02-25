import { ComponentsBaseProps } from "@/types/types";
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import RecipesHeader from "../recipes/recipecollections/contents/RecipesHeader";
interface RecipeCollectionsProps {
  children: React.ReactNode;
}
const RecipeCollectionsLayout: React.FC<RecipeCollectionsProps> = ({
  children,
}) => {
  return (
    <>
      <Box>
        <Box>
          <RecipesHeader />
        </Box>
        {children}
      </Box>
    </>
  );
};

export default RecipeCollectionsLayout;
