import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import {} from "next-auth/providers";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  // database: process.env.DB_URL,
  // session: { jwt: true },
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // },
};

export default NextAuth(authOptions);
