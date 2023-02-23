import React from "react";
import { Container, Grid, Box, Typography, Accordion } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MainButton from "@/hooks/Button";

const HomePage = () => {
  return (
    <>
      <Container maxWidth="xl" className="">
        <Grid container columnSpacing={20}>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  voluptates ratione quo, perspiciatis illum adipisci!
                </Typography>
                <Box maxWidth={"50%"}>
                  <MainButton variant="outlined">Try Now</MainButton>
                </Box>
              </div>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} xl={6} position="relative" width={"100%"}>
            <img src="/vector.png" alt="" className="vector__one__img" />
            <img src="/vector2.png" alt="" className="vector__two__img" />
            <img src="/image.png" className="image__header " />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
