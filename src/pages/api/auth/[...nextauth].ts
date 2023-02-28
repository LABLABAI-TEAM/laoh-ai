import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import {} from "next-auth/providers";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
};

export default NextAuth(authOptions);
