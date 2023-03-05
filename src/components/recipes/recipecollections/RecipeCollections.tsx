import { ComponentsBaseProps, TRecipes } from "@/types/types";
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import RecipesHeader from "./contents/RecipesHeader";
import { CollectionsLayout } from "@/components/layout";
import RecipeCollectionsLayout from "@/components/layout/RecipesCollectionsLayout";
import { RecipeCard } from "@/components/customs";

const RecipeCollections: React.FC<TRecipes> = ({
  categoryFilter,
  handleFilter,
  handleSort,
  sortedRecipes,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <>
      <Box>
        <RecipeCollectionsLayout
          sortOrder={sortOrder}
          handleSort={handleSort}
          setSortOrder={setSortOrder}
        >
          <div className="w-full pr-80  max-h-[800px] overflow-y-scroll scrollbar-none ">
            <Grid
              container
              spacing={{ xs: 2, md: 4 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{ my: "10rem", pt: "3rem" }}
            >
              {/* {Array.from(Array(24)).map((_, index) => ( */}
              {sortedRecipes?.map(
                ({ image, id, title, description, price }, index) => (
                  <RecipeCard
                    key={index}
                    image={image}
                    description={description}
                    title=""
                    price={price}
                  />
                )
              )}
            </Grid>
          </div>
        </RecipeCollectionsLayout>
      </Box>
    </>
  );
};

export default RecipeCollections;
