import { RecipLayout } from "@/components";
import { onRouteClickS } from "@/services/features/globalstate/GlobalStateSlice";
import React from "react";
import { useSelector } from "react-redux";

const RecipeCollectionCP = () => {
  const onRoute = useSelector(onRouteClickS);
  return (
    <RecipLayout onRouteClick={onRoute}>
      <h1>Recipe Collection</h1>
    </RecipLayout>
  );
};

export default RecipeCollectionCP;
