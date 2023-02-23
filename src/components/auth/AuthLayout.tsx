import { AuthLayoutProps } from "@/types/types";
import { Container, Box, Typography } from "@mui/material";
import React from "react";
import Header from "../navbar/Header";

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  redirect,
  title,
}) => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          width="100%"
          height={"100vh"}
          alignContent="center"
        >
          <Box
            width={"500px"}
            p={10}
            bgcolor="ButtonHighlight"
            borderRadius={"20px"}
          >
            <Typography textAlign={"center"} className="text__element text-2xl">
              Recipes By AI
            </Typography>
            {children}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AuthLayout;
