import { Box, Button, Container, Stack, Typography } from "@mui/joy";
import { useState } from "react";
import { CheckoutModalOutOfStock } from "./CheckoutModalOutOfStock";

export const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <Container
      disableGutters
      maxWidth="md"
      sx={{
        pt: [3, 6],
        px: [2, 0],
      }}
    >
      <Stack alignItems={"center"}>
        <Typography
          level="h1"
          textAlign="center"
          sx={{ fontSize: [28, 36, 48] }}
          color="primary"
        >
          Brasil Graffiti Book
        </Typography>
        <Typography
          level="body-md"
          textAlign={"center"}
          fontWeight={600}
          maxWidth={[200, "none", "none"]}
        >
          O sketchbook que traz as ruas para suas mãos
        </Typography>
      </Stack>
      <Stack
        justifyContent="center"
        alignItems={["center", "start"]}
        flexDirection={["column", "row"]}
        marginTop={[2, 4]}
        gap={[2, 4]}
      >
        <Stack gap={[1, 2]}>
          <Typography
            level="body-md"
            textAlign={["center", "left"]}
          >
            O Brasil Graffiti Book é cheio de imagens originais de muros, portões e paredes <b>direto das ruas de São Paulo</b>, prontas pra você mandar sua arte. 
          </Typography>
          <Typography
            level="body-md"
            textAlign={["center", "left"]}
            display={["none", "block"]}
          >
            Se você é um entusiasta, artista que já pinta na rua ou profissional da cena, o livro <b>é a representação das ruas, capturada pra você</b> se inspirar e mandar aquele bomb, persona, agenda de pixo ou o que quiser!
          </Typography>
        </Stack>
        <Box
          component="img"
          src="/books.webp"
          alt="Imagem ilustrativa do Brasil Graffiti Book Aberto e sua capa"
          sx={{
            width: "100%",
            maxWidth: [200, 200, 300],
            borderRadius: 8,
            display: ["none", "block"]
          }}
        />
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "center", mt: [2, 4] }}>
        <Button
          size="lg"
          color="primary"
          onClick={handleModalOpen}
          id="button-checkout-hero"
        >
          GARANTIR MEU LIVRO
        </Button>
      </Box>
      <CheckoutModalOutOfStock
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </Container>
  );
};
