import { AuthLayout } from "@/components";
import { SignupCP } from "@/components/forms";
import React from "react";

const Signup = () => {
  return (
    <>
      <AuthLayout
        redirect={{
          desc: " Have an account?.",
          pathname: { link: "/login", text: "  login here" },
        }}
      >
        <SignupCP />
      </AuthLayout>
    </>
  );
};

export default Signup;
