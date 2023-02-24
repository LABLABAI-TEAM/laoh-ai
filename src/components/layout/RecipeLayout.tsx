import React from "react";
import { Container, Box, Tab } from "@mui/material";
import { ComponentsBaseProps } from "@/types/types";
import SidebarLayout from "../recipes/Sidebar";
import RecipeComponent from "../recipes/RecipeComponent";

const RecipeLayout: ComponentsBaseProps = ({ children }) => {
  return (
    <>
      <div className="layout__column border">
        <div className="flex space-x-20">
          <div className="max-w-[5%] w-full">
            <SidebarLayout />
          </div>
          <div className="max-w-[95%] w-full">
            <RecipeComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeLayout;
// 252836 ABBBC2
