import { Container, IconButton, Stack, Typography } from "@mui/joy";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export const Banner = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    open && (
      <Container
        sx={{
          py: 1.5,
          px: [4, 0],
          bgcolor: "danger.solidActiveBg",
          position: "fixed",
          zIndex: 999,
          top: 0,
        }}
        disableGutters={true}
        maxWidth={false}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Typography textAlign="center" sx={{ color: "white" }}>
            <strong>ATENÇÃO:</strong> o desconto de lançamento de R$200 (30%
            OFF) pode acabar a qualquer momento sem aviso!
          </Typography>
          <IconButton size="sm" onClick={() => setOpen(false)}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Stack>
      </Container>
    )
  );
};
