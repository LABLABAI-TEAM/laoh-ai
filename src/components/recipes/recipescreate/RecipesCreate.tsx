import React from "react";
import HeaderLayout from "../Header";
import CreateTabComponent from "./contents/CreateTabComponent";

const RecipesCreateLayout = () => {
  return (
    <>
      <div>
        <HeaderLayout />
        <CreateTabComponent />
      </div>
    </>
  );
};

export default RecipesCreateLayout;
