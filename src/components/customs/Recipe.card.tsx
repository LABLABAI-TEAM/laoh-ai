import { RecipeElement } from "@/types/types";
import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const RecipeCard: React.FunctionComponent<RecipeElement> = ({
  link,
  price,
  image,
  title,
  timeFrame,
  description,
}) => {
  return (
    <>
      <Grid
        item
        xs={4}
        sm={3}
        md={2}
        sx={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
        }}
      >
        <Link href={`/${link}`}>
          <div className="w-full flex items-center justify-center rounded-xl flex-col relative bg-[#1F1D2B] py-5 px-2 space-y-8">
            <div className="absolute -top-12 z-[999]">
              {/* <Image src={image} alt="image" height={150} width={150} /> */}
              <img src={"/img2.png"} alt="" width={150} height={150} />
            </div>
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold" }}
              className="text__element__xs text-center pt-16 max-w-[90%]"
            >
              {description}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold" }}
              className="text__element__xs"
            >
              {timeFrame}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold" }}
              className="text__element__xs"
            >
              {price} $$$
            </Typography>
          </div>
        </Link>
      </Grid>
    </>
  );
};

export default RecipeCard;
