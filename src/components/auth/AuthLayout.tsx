import { AuthLayoutProps } from "@/types/types";
import { Container, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { ColorButton } from "../customs/ButtonCO";
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
          <img src="/vector4.png" className="vector__three__img" />
          <img src="/vector3.png" className="vector__three__img" />
          <Box
            width={"500px"}
            p={10}
            borderRadius={"20px"}
            bgcolor="slategray"
            zIndex={"999"}
          >
            <Typography textAlign={"center"} className="text__element text-2xl">
              Recipes By AI
            </Typography>
            {children}

            <div className="text__element flex items-center mt-5">
              {redirect?.desc}{" "}
              <Link href={`${redirect?.pathname.link}`}>
                {" "}
                <Typography className="underline">
                  {redirect?.pathname.text}{" "}
                </Typography>{" "}
              </Link>
            </div>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AuthLayout;
