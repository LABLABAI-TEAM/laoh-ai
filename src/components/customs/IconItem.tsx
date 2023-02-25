import { Box } from "@mui/material";
import React from "react";
import { IconType } from "react-icons";
interface IconItemProps {
  icon: React.ReactNode;
}
const IconItem: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Box p="30px" borderRadius={"20px"} bgcolor="gold" mb="100px">
        {children}
      </Box>
    </>
  );
};

export default IconItem;
