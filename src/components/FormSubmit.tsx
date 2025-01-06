import {
  Box,
  Button,
  Container,
  Typography
} from "@mui/joy";
import { useState } from "react";
import { CheckoutModalOutOfStock } from "./CheckoutModalOutOfStock";

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
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          p: 4,
          maxWidth: 600,
          mx: 'auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <Typography
          level="h2"
          sx={{ fontSize: [24, 32], maxWidth: 400, mx: 'auto' }}
        >
          Garanta seu Brasil Graffiti Book
        </Typography>

        <Typography
          level="h1"
          sx={{ 
            fontSize: [40, 48],
            fontWeight: 'bold',
            color: "success.500"
          }}
        >
          por R$98
        </Typography>

        <Typography
          level="body-lg"
          sx={{ mb: 2 }}
        >
          leve as ruas na palma da sua mão e faça{' '}
          <Box component="span" sx={{ display: 'block' }}>
            sketches de graffiti em qualquer hora e lugar!
          </Box>
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="lg"
          color="primary"
          onClick={handleModalOpen}
          id="button-checkout-hero"
        >
          GARANTIR MEU LIVRO
        </Button>
      </Box>
      </Box>

      <CheckoutModalOutOfStock
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </Container>
  );
};