import { Container, Typography } from "@mui/joy";
import React from "react";

export const Footer = () => {
  return (
    <Container
      sx={{ mt: [4, 10], py: 3, bgcolor: "background.level1" }}
      disableGutters={true}
      maxWidth={false}
    >
      <Typography textAlign="center">
        © 2024 Gabriel Carreira. All rights reserved.
      </Typography>
    </Container>
  );
};
