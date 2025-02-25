import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import theme from "@/config/theme";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

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
    <CssVarsProvider defaultMode="light" theme={theme} disableNestedContext>
      <PostHogProvider client={posthog}>
        <Analytics />
        <CssBaseline />
        <WhatsAppButton />
        {/* <Banner /> */}
        <Component {...pageProps} />
        <Footer />
      </PostHogProvider>
    </CssVarsProvider>
  );
}
