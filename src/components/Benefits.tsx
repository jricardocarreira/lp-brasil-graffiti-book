import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/joy";
import React from "react";
import StairsIcon from "@mui/icons-material/Stairs";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export const Benefits = () => {
  const benefits = [
    {
      title: "Acessível para Designers e Motions",
      description:
        "Feito para profissionais criativos, sem necessidade de conhecimento prévio em programação.",
      icon: EmojiObjectsIcon,
    },
    {
      title: "Linguagem Prática e Amigável",
      description:
        "Aulas curtas e diretas, com duração de 5-7 minutos, utilizando termos familiares aos designers.",
      icon: EmojiEmotionsIcon,
    },
    {
      title: "Aprendizado Progressivo",
      description:
        "Conteúdo estruturado de forma gradual, permitindo uma evolução constante do aluno.",
      icon: StairsIcon,
    },
    {
      title: "Foco no Essencial",
      description:
        "Ensina o necessário para criar os primeiros scripts, evitando sobrecarga de informações.",
      icon: CenterFocusStrongIcon,
    },
    {
      title: "Projetos Práticos Variados",
      description:
        "Cinco projetos que cobrem aspectos fundamentais de scripts para After Effects.",
      icon: AccountTreeIcon,
    },
    {
      title: "Aplicação Imediata",
      description:
        "Conhecimentos que permitem acelerar o fluxo de trabalho e criar diversos projetos autorais.",
      icon: ThumbUpIcon,
    },
  ];

  return (
    <Container disableGutters sx={{ mt: 6, px: [2, 0] }}>
      <Grid container spacing={[2, 4]} sx={{ mt: 4 }}>
        {benefits.map((benefit, index) => {
          return (
            <Grid xs={12} sm={6} md={4} key={index}>
              <Card variant="plain" sx={{ p: 2, overflow: "hidden" }}>
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <benefit.icon
                    sx={{ fontSize: ["64px", "48px"], color: "primary.400" }}
                    fontSize="inherit"
                  />
                  <Typography level="h4" textAlign="center" sx={{lineHeight: 1.35}}>
                    {benefit.title}
                  </Typography>
                  <Typography level="body-sm" textAlign="center">
                    {benefit.description}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
