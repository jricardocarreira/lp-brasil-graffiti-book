import { AboutMe } from "@/components/AboutMe";
import { FormSubmit } from "@/components/FormSubmit";
import { HeroSection } from "@/components/HeroSection";
import KnowAbout from "@/components/KnowAbout";
import { Questions } from "@/components/Questions";
import { Container } from "@mui/joy";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brasil Graffiti Book</title>
        <meta
          name="Brasil Graffiti Book"
          content="Conheça o Brasil Graffiti Book, o livro que traz imagens autorais das ruas de São Paulo, feito para entusiastas, artistas amadores e profissionais!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container maxWidth="md">
          <HeroSection />
          <KnowAbout />
          <FormSubmit />
          <AboutMe />
          <Questions />
        </Container>
      </main>
    </>
  );
}
