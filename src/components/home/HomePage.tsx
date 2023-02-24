import React, { useState, useInsertionEffect, useEffect } from "react";
import { Container, Grid, Box, Typography, Accordion } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MainButton from "@/hooks/Button";
import cx from "classnames";
import { useRouter } from "next/router";

const HomePage = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [topSize, setTopSize] = useState(0);

  const handleSize = () => {
    if (typeof window !== "undefined") {
      setWindowSize({
        // @ts-ignore
        width: window.innerWidth,
        // @ts-ignore`
        height: window.innerHeight,
      });
    }
  };

  useEffect(() => {
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  useEffect(() => {
    // @ts-ignore
    setTopSize(windowSize.height);
  }, [windowSize]);

  const router = useRouter();
  return (
    <>
      <Container
        maxWidth="xl"
        className="h-[100vh] align-middle items-center justify-center flex"
      >
        <Grid container columnSpacing={20} height="100%">
          <Grid item sm={12} md={6} xl={6}>
            <Box maxWidth={"100%"}>
              <Box display={"flex"} alignItems={"center"}>
                <Link href={"/"}>
                  <Image
                    src={"/logo.png"}
                    alt=""
                    width={122}
                    height={120}
                    className=""
                  />
                </Link>

                <Typography className="text__element" pr="-20px">
                  Recipes By AI
                </Typography>
              </Box>
              <div className="items__column mt-20 md:mt-40 space-y-10">
                <Typography className="text__large">
                  Quench Your Hunger
                </Typography>
                <Typography className="text__element">
                  At our core, we are a recipe website that uses artificial
                  intelligence to help you create recipes that are tailored to
                  your preferences. We believe that cooking should be fun,
                  creative, and stress-free, and we are passionate about
                  empowering people to create amazing meals at home.
                </Typography>
                <Box maxWidth={"50%"}>
                  <MainButton
                    variant="outlined"
                    handleEvent={() => router.push("/login")}
                  >
                    Try Now
                  </MainButton>
                </Box>
              </div>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} xl={6} position="relative" width={"100%"}>
            <img
              src="/vector.png"
              alt=""
              className={cx("vector__one__img", `top-[${topSize}]`)}
            />
            <img src="/vector2.png" alt="" className="vector__two__img" />
            <img src="/image.png" className="image__header " />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
