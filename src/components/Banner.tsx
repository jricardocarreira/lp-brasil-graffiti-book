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
          bgcolor: "danger.plainColor",
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
            <strong>ATENÇÃO:</strong> poucas unidades disponíveis para esse lançamento!
          </Typography>
          <IconButton size="sm" onClick={() => setOpen(false)}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Stack>
      </Container>
    )
  );
};
