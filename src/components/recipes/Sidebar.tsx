import { Container, Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import IconItem from "../customs/IconItem";

const SidebarLayout = () => {
  return (
    <>
      <Box
        bgcolor="#1F1D2B"
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        borderRadius={"20px"}
        alignItems="center"
        paddingBottom={"300px"}
        height="100%"
      >
        <Box width="100px" height="100px" bgcolor={"white"}>
          <img src="/logo.png" className="w-full h-full" />
        </Box>
        <Box
          flexDirection={"column"}
          display="flex"
          justifyContent={"center"}
          mt="20px"
        >
          <IconItem />
          <IconItem />
          <IconItem />
        </Box>
      </Box>
    </>
  );
};

export default SidebarLayout;
