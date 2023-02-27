import { isResponseS } from "@/services/features/globalstate/GlobalStateSlice";
import { log } from "console";
import React from "react";
import { useSelector } from "react-redux";
const NoResponseComponent = () => (
  <div>
    <img src="/chef.png" alt="" className=" top-0 w-20 h-20" />
    <img src="/outputTRI.png" alt="" className="w-10 h-10 ml-16 " />
    <img src="/rectangle.png" alt="" className="ml-24 -mt-16" />
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
