import NextAuth, { User, type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import { JWT } from "next-auth/jwt";
import { Session } from "inspector";

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's access token from OAuth or JWT provider. */
      accessToken: string;
      tokenType: string;
      profile: string;
      name: string;
      username: string;
      id: string;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {

          const params = new URLSearchParams();
          params.append("username", validateFields.data.username as string);
          params.append("password", validateFields.data.password as string);

          const response = await fetch(
            // "http://localhost:8000/api/v1/login/oauth",
            "http://localhost:5000/api/v1/login",
            {
              method: "POST",
              // headers: { "Content-Disposition": params },
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: params,
            }
          );

          // console.log("Response: ", response);

          if (!response.ok) {
            throw new Error("Invalid credentials");
          }

          user = await response.json();

          console.log(user);

          if (!user) {
            // No user found, so this is their first attempt to login
            // meaning this is also the place you could do registration
            throw new Error("User not found.");
          }

          // You can also return some other properties from the API call if you want
          user["username"] = user.user.username;
          user["name"] = user.user.name;
          user["profile"] = user.user.profile;
          user["image"] = user.user.image;
        }

        // return user object with the their profile data
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.name = user.name;
        token.profile = user.profile;
        token.accessToken = user.access_token;
        token.tokenType = user.token_type;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.id = token.id as string;
      session.user.username = token.username as string;
      session.user.name = token.name as string;
      session.user.profile = token.profile as string;
      session.user.accessToken = token.accessToken as string;
      session.user.tokenType = token.tokenType as string;
      return session;
    },
  },
});

// import NextAuth from "next-auth"
// import authConfig from "@/auth.config"

// export const {
//     handlers,
//     auth,
//     signIn,
//     signOut
// } = NextAuth({
//     callbacks: {
//         async session({ token, session }) {
//             if (token.sub && session.user) {
//                 session.user.id = token.sub;
//             }
//             return session;
//         },
//         async jwt({ token }) {
//             return token;
//         }
//     },
//     session: { strategy: "jwt" },
//     ...authConfig,
// })
