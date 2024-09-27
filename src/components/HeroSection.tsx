import { Box, Button, Container, Link, Typography } from "@mui/joy";
import React from "react";
import YoutubeVideo from "./YoutubeVideo";

export const HeroSection = () => {
  return (
    <Container disableGutters sx={{ mt: 6, px: [2, 0] }}>
      <Typography
        level="h1"
        textAlign="center"
        sx={{ fontSize: [30, 36, 45], mx: [4, 0] }}
        color="primary"
      >
        Crie Scripts para After Effects
      </Typography>
      <Typography
        level="body-md"
        textAlign="center"
        sx={{ mx: [0, 10, 10], mt: 2 }}
      >
        Aprenda a criar seus primeiros scripts para After Effects,{" "}
        <strong>mesmo sem experiência prévia em programação!</strong>
      </Typography>
      <Typography
        level="body-md"
        textAlign="center"
        sx={{ mx: [0, 10, 10], mt: 2 }}
      >
        Este curso é voltado para designers, motion e criativos, utilizando uma
        linguagem simples e acessível. Com aulas curtas e progressão gradual,
        você dominará os conceitos essenciais e{" "}
        <strong>desenvolverá 5 projetos práticos de diferentes níveis</strong>,
        aplicando e consolidando seus novos conhecimentos.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Link href="https://pay.cakto.com.br/6Apai6N?coupon=CREATEGABRIEL">
          <Button id="button-checkout-hero">QUERO COMEÇAR</Button>
        </Link>
      </Box>
      <Box sx={{ mt: 5 }}>
        <YoutubeVideo embed="sHXL7ZEKiTI" />
      </Box>
    </Container>
  );
};
