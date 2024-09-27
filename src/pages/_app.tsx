import type { AppProps } from "next/app";
import theme from "@/config/theme";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import { Analytics } from "@vercel/analytics/react";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { CollectLead } from "@/components/CollectLead";

if (typeof window !== "undefined") {
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY)
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      person_profiles: "identified_only",
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") posthog.debug();
      },
    });
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider defaultMode="dark" theme={theme}>
      <PostHogProvider client={posthog}>
        <Analytics />
        <CssBaseline />
        <CollectLead />
        <Banner />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </PostHogProvider>
    </CssVarsProvider>
  );
}
