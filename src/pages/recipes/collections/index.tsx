import { RecipLayout } from "@/components";
import RecipeComponent from "@/components/recipes/RecipeComponent";
import { onRouteClickS } from "@/services/features/globalstate/GlobalStateSlice";
import React from "react";
import { useSelector } from "react-redux";

const RecipeCollectionCP = () => {
  const onRoute = useSelector(onRouteClickS);
  return (
    <RecipLayout onRouteClick={onRoute}>
      <RecipeComponent />
    </RecipLayout>
  );
};

export default RecipeCollectionCP;
