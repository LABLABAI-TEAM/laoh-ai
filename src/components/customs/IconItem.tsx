import { Box } from "@mui/material";
import React from "react";
import { Home, SettingsAccessibility, EditRounded } from "@mui/icons-material";
interface IconItemProps {
  icon: React.ReactNode;
}
const IconItem = () => {
  return (
    <>
      <Box p="30px" borderRadius={"20px"} bgcolor="gold" mb="100px">
        <Home fontSize="large" />
      </Box>
    </>
  );
};

export default IconItem;
