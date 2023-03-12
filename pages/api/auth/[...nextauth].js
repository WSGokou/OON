/* eslint-disable new-cap */
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};
const method = 'POST';

export const authOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60, // 1 Hour expiry
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const oonUrl = process.env.OON_URL;
        // const baseUrl = process.env.MAGENTO_URL;
        const response = await fetch(
          oonUrl + '/rest/V1/integration/customer/token',
          {
            method,
            body: JSON.stringify(credentials),
            headers,
          },
        );
        const data = await response.json();
        // Returning token to set in session
        if (response.ok && data) {
          return {
            token: data,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({token, user}) => {
      user && (token.user = user);
      return token;
    },
    session: async ({session, token}) => {
      session.user = token.user; // Setting token in session
      return session;
    },
  },
  pages: {
    signIn: '/auth/login', // Need to define custom login page (if using)
  },
};

export default NextAuth(authOptions);
