import Head from "next/head";
import { Container } from "@mui/joy";
import { HeroSection } from "@/components/HeroSection";
import { Benefits } from "@/components/Benefits";
import { AboutMe } from "@/components/AboutMe";
import { ButtonSection } from "@/components/ButtonSection";
import { Bonuses } from "@/components/Bonuses";
import { Price } from "@/components/Price";
import { Questions } from "@/components/Questions";
import { FormSubmit } from "@/components/FormSubmit";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Script</title>
        <meta
          name="description"
          content="Aprenda a criar seus primeiros scripts para After Effects, mesmo sem experiência prévia em programação!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxWidth="md">
          <HeroSection />
          <FormSubmit />
          <Benefits />
          <ButtonSection />
          <Bonuses />
          <AboutMe />
          <Price />
          <Questions />
        </Container>
      </main>
    </>
  );
}
