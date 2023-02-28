import React from "react";
import { getSession, useSession } from "next-auth/react";
import { GetServerSideProps } from "next";

const Blog: React.FC<{ data: any }> = ({ data: Data }) => {
  const { data } = useSession();
  return <div>Blog{Data} </div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      props: {
        session,
        data: session ? "LIST PERON" : "LSIT FREE",
      },
    };
  }

  return {
    redirect: {
      destination: "/api/auth/login?callbackUrl=http://localhost:3000/blog",
      permanent: false,
    },
  };
};
export default Blog;
