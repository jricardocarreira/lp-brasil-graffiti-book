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
                     bgcolor: "danger.600",
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
            ATENÇÃO: Restam apenas <b>38 unidades</b> em estoque!
          </Typography>
          <IconButton size="sm" onClick={() => setOpen(false)}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Stack>
      </Container>
    )
  );
};
