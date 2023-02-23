import React from "react";
import { Typography, Container, AppBar } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Typography variant="h3" component="div" sx={{ flexGrow: 1, color: "white" }}>
          Recipes By AI
        </Typography>
      </Container>
    </AppBar>
  );
}

export default Header;
