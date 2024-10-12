import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "@/validations/loginFormSchema";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        userName: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validationFields: any = await loginSchema.validate(credentials, {
          strict: true,
        });

        const { userName, password } = validationFields;

        let user = null;

        const res = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: userName,
            password: password,
            expiresInMins: 60, // optional, defaults to 60
          }),
          credentials: "include", // Include cookies (e.g., accessToken) in the request
        });

        user = await res.json();

        if (!!user?.accessToken) {
          return user;
        }
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.accessToken = user?.accessToken;
        token.refreshToken = user?.refreshToken;
        token.accessTokenExpires = Date.now() + 60 * 60 * 1000; // one hours
      }

      if (!!token && !!token?.accessToken) {
        if (Date.now() < +token?.accessTokenExpires) {
          return token;
        }

        const res = await fetch("https://dummyjson.com/auth/refresh", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            refreshToken: token.refreshToken, // Optional, if not provided, the server will use the cookie
            expiresInMins: 60, // optional (FOR ACCESS TOKEN), defaults to 60
          }),
          credentials: "include", // Include cookies (e.g., accessToken) in the request
        });
        const newToken = await res.json();
        return {
          ...token,
          accessToken: newToken.accessToken,
          accessTokenExpires: Date.now() + 60 * 60 * 1000, // one hours
          refreshToken: newToken.refreshToken ?? token.refreshToken,
        };
      }
    },

    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      return session;
    },
  },
});
