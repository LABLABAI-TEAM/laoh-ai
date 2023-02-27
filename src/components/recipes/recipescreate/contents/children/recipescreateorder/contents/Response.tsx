import { isResponseS } from "@/services/features/globalstate/GlobalStateSlice";
import { Typography, Box } from "@mui/material";
import { log } from "console";
import React from "react";
import { useSelector } from "react-redux";
const NoResponseComponent = () => (
  <div>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <img src="/chef.png" alt="" className=" top-0 w-20 h-20" />
    </Box>

    <Box position="relative" display="inline-flex" width="100%" height="500px">
      <img
        src="/rectangle.png"
        alt="image"
        className="w-full h-full max-w-full rounded-md"
      />
      <Typography
        variant="h5"
        component="div"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
        }}
      >
        AI OUTPUT
      </Typography>
    </Box>
  </div>
);
const ResponseComponent = () => (
  <div>
    <h1> Response</h1>
  </div>
);
const Response = () => {
  const isResponse = useSelector(isResponseS);
  console.log("response", isResponse);
  const Content = () =>
    isResponse ? <ResponseComponent /> : <NoResponseComponent />;
  return (
    <>
      <div className="bg-[#646D97] rounded-xl p-5 relative m-40">
        <Content />
      </div>
    </>
  );
};

export default Response;
