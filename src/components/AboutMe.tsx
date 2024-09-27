import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  TypographySystem,
} from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import React from "react";

interface TextProps {
  level: keyof TypographySystem;
  sx: SxProps;
  textAlign: any;
}

export const AboutMe = () => {
  const title: TextProps = {
    level: "h1",
    sx: { fontSize: [30, 36, 45], mx: [4, 0] },
    textAlign: ["center", "left"],
  };

  return (
    <Container disableGutters sx={{ mt: [-10, 10] }}>
      <Grid
        container
        direction={{ xs: "column-reverse", sm: "row" }}
        spacing={4}
        sx={{ alignItems: "center" }}
      >
        <Grid xs={12} sm={8}>
          <Typography {...title}>Olá, eu me chamo</Typography>
          <Typography {...title} color="primary">
            Gabriel Carreira
          </Typography>
          <Typography level="body-sm" sx={{ mt: 2, mx: [4, 0] }} textAlign={["center", "left"]}>
            Combinando 8 anos como Motion Designer e 5 anos como Desenvolvedor,
            eu misturo código e criatividade, me especializando na criação de
            scripts/plugins para After Effects, e sou fundador da Brazu, uma
            startup brasileira que desenvolve plugins para After Effects.
          </Typography>
        </Grid>
        <Grid xs={12} sm={4}>
          <Box sx={{ mt: [10, 0], mb: [-1, 0], mx: [10, 0] }}>
            <Box
              component="img"
              alt="Profile Picture"
              src="/profile.png"
              sx={{ width: "100%", boxShadow: "0 0 60px #9553d333" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
