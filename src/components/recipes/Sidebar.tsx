import {
  Container,
  Box,
  Button,
  ButtonGroup,
  ButtonGroupClasses,
  buttonGroupClasses,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import IconItem from "../customs/IconItem";
import {
  Home,
  SettingsAccessibility,
  EditRounded,
  Settings,
} from "@mui/icons-material";
import { useRouter } from "next/router";

type SidebarLayoutType = {
  onRoute?: boolean;
  handleTabClick: (route: string) => void;
};

const SidebarLayout = ({ onRoute, handleTabClick }: SidebarLayoutType) => {
  const router = useRouter();
  return (
    <>
      <Box
        bgcolor="#1F1D2B"
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        borderRadius={"20px"}
        alignItems="center"
        pb={"200px"}
      >
        <Box width="150px" height="100px" flex="1">
          <img src="/logo.png" className="w-full h-full" />
        </Box>
        <div className="flex-col justify-center pt-10 space-y-20">
          <IconItem
            handleTabClick={() => handleTabClick("collections")}
            onRoute={onRoute}
            route="collections"
          >
            <Home />
          </IconItem>
          <IconItem
            handleTabClick={() => handleTabClick("create")}
            route="create"
          >
            <EditRounded />
          </IconItem>
          <IconItem handleTabClick={() => router.push("/")}>
            <Settings />
          </IconItem>
        </div>
      </Box>
    </>
  );
};

export default SidebarLayout;
