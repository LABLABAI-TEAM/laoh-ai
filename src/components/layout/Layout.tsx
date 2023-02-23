import { Box } from "@mui/material";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="max-w-[1280px] mx-auto">{children}</div>
    </>
  );
};

export default Layout;
