import { AuthLayout } from "@/components";
import { LoginCP } from "@/components/forms";
import React from "react";

const Login = () => {
  return (
    <>
      <AuthLayout
        redirect={{
          desc: "Don't have an account?.",
          pathname: { link: "/signup", text: "  Register here" },
        }}
      >
        <LoginCP />
      </AuthLayout>
    </>
  );
};

export default Login;
