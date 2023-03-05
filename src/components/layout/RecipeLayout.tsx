import React from "react";
import { Container, Box, Tab } from "@mui/material";
import { ComponentsBaseProps } from "@/types/types";
import SidebarLayout from "../recipes/Sidebar";
import RecipeComponent from "../recipes/RecipeComponent";
import { useRouter } from "next/router";

const RecipeLayout: ComponentsBaseProps = ({ children, onRouteClick }) => {
  const router = useRouter();
  React.useEffect(() => {
    const tabRoutes = ["collections", "create", "setting"];
    const match = tabRoutes.find((route) => router.asPath.includes(route));
    if (!match) router.push("/recipes/collections");
  }, [router]);
  const handleTabClick = (route: string) => {
    router.push(`/recipes/${route}`);
  };
  return (
    <>
      <div className="layout__column border">
        <div className="flex space-x-20">
          <div className="max-w-[5%] w-full left-0 sticky -pt-20">
            <SidebarLayout
              onRoute={onRouteClick}
              handleTabClick={handleTabClick}
            />
          </div>
          <div className="max-w-[90%] w-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default RecipeLayout;
// 252836 ABBBC2
