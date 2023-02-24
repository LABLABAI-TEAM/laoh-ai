import React from "react";

import { Components, Container, AppBar, Typography } from "@mui/material";
import Link from "next/link";
const HeaderLayout = () => {
  return (
    <>
      <AppBar position="static" color={"transparent"}>
        <Container className="content__fill py-5">
          <Link href={"/"}>
            <Typography className="text__element text-2xl">
              Recipes By AI
            </Typography>
          </Link>
        </Container>
      </AppBar>
    </>
  );
};

export default HeaderLayout;
