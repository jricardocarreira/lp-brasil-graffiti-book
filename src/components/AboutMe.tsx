import {
  Box,
  Container,
  Grid,
  Typography,
  TypographySystem
} from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";

interface TextProps {
  level: keyof TypographySystem;
  sx: SxProps;
  textAlign: any;
}

export const AboutMe = () => {
  const title: TextProps = {
    level: "h1",
    sx: { fontSize: [32, 36, 40], mx: [6, 0] },
    textAlign: ["center", "left"],
  };

  return (
    <Container
    disableGutters
    sx={{
      pt: [3, 6],
      px: [2, 0],
      mt: [-10, 10]
      }}>
      <Grid
        container
        direction={{ xs: "column-reverse", sm: "row" }}
        spacing={4}
        sx={{ alignItems: "center" }}
      >
        <Grid xs={12} sm={8}>
          <Typography {...title}>
            Salve, me chame de
            {' '}
            <Box component={'span'} color="primary.500">
              BUG
            </Box>
          </Typography>
          <Typography level="body-sm" sx={{ mt: 2 }} textAlign={["center", "left"]}>
            Sou grafiteiro há 13 anos, natural de Palmas, Tocantins, na Região Norte do Brasil. Além do graffiti, faço arte digital, adesivos, quadros e customizações, usando minha arte para desenvolver projetos que beneficiem a comunidade e a cultura.
            Um dos meus projetos independentes é o "Cola na Causa", que arrecada recursos para a proteção animal. Faço isso vendendo minhas artes autorais e recebendo doações diretas para o projeto. O projeto realizará sua terceira edição em 2024.
          </Typography>
        </Grid>
        <Grid xs={12} sm={4}>
          <Box sx={{ mt: [10, 0], mb: [-1, 0], mx: [10, 0] }}>
            <Box
              component="img"
              alt="Profile Picture"
              src="/profile.png"
              sx={{ width: "100%", boxShadow: "-4px 4px 0 #222" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
