import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  Input,
  Stack,
  Typography,
} from "@mui/joy";
import posthog from "posthog-js";
import React, { RefObject, useState } from "react";
import { CheckoutModal } from "./CheckoutModal";

export const FormSubmit = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  return (
    <Container
      disableGutters
      sx={{
        pt: [3, 6],
        px: [2, 0],
        mt: 4
      }}>
        <Stack justifyContent="center" alignItems="center">
          <Typography
            level="h2"
            textAlign="center"
            sx={{ fontSize: [24, 32, 40] }}
            maxWidth={[250, 550, 600]}
          >
            Garanta seu
            {' '}
            <Box
              component={'span'}
              display={'inline'}
              sx={{ color: 'primary.500' }}>
              Brasil Graffiti Book
            </Box>
            {' '}
            por R$98!
          </Typography>
          <Stack
            textAlign="center"
            maxWidth={[440]}
            gap={1}
            sx={{ mb: [2, 4], mt: 1 }}
          >
            <Typography
              level="body-md">
              Leve as ruas na palma da sua mão e
              {' '}
              <Box
                component={'span'}
                display={'inline'}
                sx={{ fontWeight: "700" }}>
                desenhe graffiti em qualquer hora e lugar!
              </Box>
            </Typography>
          </Stack>

          <Box sx={{ display: "flex", justifyContent: "center"}}>
            <Button
              size="lg"
              color="success"
              onClick={handleModalOpen}
              id="button-checkout-form"
            >
              GARANTIR MEU LIVRO
            </Button>
          </Box>
        </Stack>

      <CheckoutModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </Container>
  );
};