import { ComponentsBaseProps } from "@/types/types";
import React from "react";
import { Typography } from "@mui/material";

const AppErrorMessage: ComponentsBaseProps = ({ error, visible }) => {
  if (!error || !visible) return null;
  return (
    <>
      <Typography component="p">{error}</Typography>
    </>
  );
};

export default AppErrorMessage;
