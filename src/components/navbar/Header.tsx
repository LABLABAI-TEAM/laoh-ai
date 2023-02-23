import React from "react";
import { AppBar, Typography, Container } from "@mui/material";
import {} from "@mui/lab";

const Header = () => {
  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Typography>LAOHAI</Typography>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
