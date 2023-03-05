import React from "react";
import FullWidthTab from "../tabspanel/TabsPanel";
import Header from "./Header";

const RecipeComponent = () => {
  return (
    <>
      <div className="max-w-nine">
        <Header />
        <FullWidthTab />
      </div>
    </>
  );
};

export default RecipeComponent;
