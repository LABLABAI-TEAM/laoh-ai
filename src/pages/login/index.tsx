import { AuthLayout } from "@/components";
import { LoginCP } from "@/components/forms";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session, status } = useSession();
  return (
    <>
      <AuthLayout
        redirect={{
          desc: "Don't have an account?.",
          pathname: { link: "/signup", text: "  Register here" },
        }}
      >
        <LoginCP />
        {session ? (
          <p>
            {session.user?.email}{" "}
            <button
              onClick={(e: React.SyntheticEvent) => {
                e.preventDefault();
                signOut();
              }}
            >
              out
            </button>{" "}
          </p>
        ) : (
          <p>
            <button onClick={() => signIn()}>in</button>
          </p>
        )}
      </AuthLayout>
    </>
  );
};

export default Login;
