import CloseIcon from "@mui/icons-material/Close";
import { Container, IconButton, Stack, Typography } from "@mui/joy";
import { useState } from "react";

export const Banner = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    open && (
      <Container
        sx={{
          py: 1.5,
          px: [0, 0],
          bgcolor: "success.700",
          position: "fixed",
          zIndex: 999,
          top: 0,
        }}
        disableGutters={true}
        maxWidth={false}
      >
        <Stack
          direction="row"
          spacing={[0, 2]}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Typography textAlign="center" sx={{ color: "white" }}>
            Receba <b>5% de desconto</b> pagando no PIX!
          </Typography>
          <IconButton size="sm" onClick={() => setOpen(false)}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Stack>
      </Container>
    )
  );
};
