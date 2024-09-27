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

export const ButtonSection = () => {
  return (
    <Container disableGutters sx={{ my: 6, px: [2, 0] }}>
      <Typography
        level="body-lg"
        textAlign="center"
        sx={{ mx: [0, 10, 20] }}
      >
        <strong>Clique no botão abaixo</strong> e dê o primeiro passo para criar
        seus próprios Scripts para After Effects
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Link href="https://pay.cakto.com.br/6Apai6N?coupon=CREATEGABRIEL">
          <Button id="button-checkout-section">QUERO COMEÇAR</Button>
        </Link>
      </Box>
    </Container>
  );
};
