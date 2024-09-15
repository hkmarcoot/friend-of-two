// import { convexAuth } from "@convex-dev/auth/server";
// import GitHub from "@auth/core/providers/github";

// export const { auth, signIn, signOut, store } = convexAuth({
//   providers: [GitHub],
// });

import GitHub from "@auth/core/providers/github";
import { convexAuth } from "@convex-dev/auth/server";

// Detect environment (development vs production)

const isDevelopment = process.env.NODE_ENV !== "production";

// Define allowed redirect URIs for development and production
const allowedRedirects = isDevelopment
  ? ["exp://192.168.1.180:8081", "http://localhost:8081"] // Development URIs
  : [
      "https://opulent-kingfisher-620.convex.site",
      "https://friend-of-two.netlify.app",
      // "myapp://",
    ]; // Production URI

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [GitHub],
  callbacks: {
    async redirect({ redirectTo }) {
      // Check if the redirectTo URL is valid based on environment
      if (!allowedRedirects.includes(redirectTo)) {
        throw new Error(`Invalid redirectTo URI ${redirectTo}`);
      }
      return redirectTo;
    },
  },
});
