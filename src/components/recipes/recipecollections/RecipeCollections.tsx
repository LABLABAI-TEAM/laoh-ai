import { ComponentsBaseProps } from "@/types/types";
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import RecipesHeader from "./contents/RecipesHeader";
import { CollectionsLayout } from "@/components/layout";
import RecipeCollectionsLayout from "@/components/layout/RecipesCollectionsLayout";
import { RecipeCard } from "@/components/customs";

const RecipeCollections = () => {
  return (
    <>
      <Box>
        <RecipeCollectionsLayout>
          <div className="w-full pr-80  max-h-[800px] overflow-y-scroll scrollbar-none ">
            <Grid
              container
              spacing={{ xs: 2, md: 10 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              sx={{ my: "10rem", pt: "3rem" }}
            >
              {/* {Array.from(Array(24)).map((_, index) => ( */}
              {Array(36)
                .fill(0)
                .map((_, index) => (
                  <RecipeCard
                    key={index}
                    image="/image.png"
                    title=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                  quam sunt, nihil qui laborum perferendis."
                    timeFrame="5-7 mins"
                    link="/"
                    price={10}
                  />
                ))}
            </Grid>
          </div>
        </RecipeCollectionsLayout>
      </Box>
    </>
  );
};

export default RecipeCollections;
